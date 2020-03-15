using System;
using System.ComponentModel.DataAnnotations;

namespace Bif4.Koch.WeinVerwaltung.Models
{
    public class Wine
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Producer { get; set; }
        public string Type { get; set; }
        [DataType(DataType.Date)]
        public DateTime Harvest { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; }
    }
}