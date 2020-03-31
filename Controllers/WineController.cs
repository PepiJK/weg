using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Bif4.Koch.WeinVerwaltung.Data;
using Bif4.Koch.WeinVerwaltung.Models;
using Microsoft.AspNetCore.Authorization;

namespace Bif4.Koch.WeinVerwaltung.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WineController : ControllerBase
    {
        private readonly WeinVerwaltungContext _context;

        public WineController(WeinVerwaltungContext context)
        {
            _context = context;
        }

        // GET: api/Wine
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Wine>>> GetWines()
        {
            return await _context.Wines.ToListAsync();
        }

        // GET: api/Wine/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Wine>> GetWine(int id)
        {
            var wine = await _context.Wines.FindAsync(id);

            if (wine == null)
            {
                return NotFound();
            }

            return wine;
        }

        // PUT: api/Wine/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        [Authorize]
        public async Task<IActionResult> PutWine(int id, Wine wine)
        {
            if (id != wine.Id)
            {
                return BadRequest();
            }
            
            var claims = User.Claims;
            var subject = claims.FirstOrDefault(c => c.Type == "sub")?.Value;

            if (wine.UserSubject != subject)
            {
                return Forbid();
            }

            _context.Entry(wine).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WineExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Wine
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        [Authorize]
        public async Task<ActionResult<Wine>> PostWine(Wine wine)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            
            var claims = User.Claims as Claim[] ?? User.Claims.ToArray();;
            wine.UserSubject = claims.FirstOrDefault(c => c.Type == "sub")?.Value;
            wine.Name = claims.FirstOrDefault(c => c.Type == "name")?.Value;
            wine.Email = claims.FirstOrDefault(c => c.Type == "email")?.Value;

            _context.Wines.Add(wine);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWine", new { id = wine.Id }, wine);
        }

        // DELETE: api/Wine/5
        [HttpDelete("{id}")]
        [Authorize]
        public async Task<ActionResult<Wine>> DeleteWine(int id)
        {
            var wine = await _context.Wines.FindAsync(id);
            if (wine == null)
            {
                return NotFound();
            }
            
            var claims = User.Claims;
            var subject = claims.FirstOrDefault(c => c.Type == "sub")?.Value;

            if (wine.UserSubject != subject)
            {
                return Forbid();
            }

            _context.Wines.Remove(wine);
            await _context.SaveChangesAsync();

            return wine;
        }

        private bool WineExists(int id)
        {
            return _context.Wines.Any(e => e.Id == id);
        }
    }
}
