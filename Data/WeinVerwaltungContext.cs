using Bif4.Koch.WeinVerwaltung.Models;
using Microsoft.EntityFrameworkCore;

namespace Bif4.Koch.WeinVerwaltung.Data
{
    public class WeinVerwaltungContext : DbContext
    {
        public WeinVerwaltungContext (DbContextOptions<WeinVerwaltungContext> options)
            : base(options)
        {
        }

        public DbSet<Wine> Wines { get; set; }
    }
}