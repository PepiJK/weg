using Microsoft.EntityFrameworkCore.Migrations;

namespace Bif4.Koch.WeinVerwaltung.Migrations
{
    public partial class AddUserSubject : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserSubject",
                table: "Wines",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserSubject",
                table: "Wines");
        }
    }
}
