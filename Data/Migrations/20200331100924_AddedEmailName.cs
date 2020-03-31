using Microsoft.EntityFrameworkCore.Migrations;

namespace Bif4.Koch.WeinVerwaltung.Migrations
{
    public partial class AddedEmailName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Wines",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Wines",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Email",
                table: "Wines");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Wines");
        }
    }
}
