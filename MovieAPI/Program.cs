using Microsoft.EntityFrameworkCore;
using MovieAPI.Data;
using MovieAPI.Helpers;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
   builder.Services.AddDbContext<AppDbContext>(options =>
            options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")
            // sqlOptions => sqlOptions.UseNetTopologySuite()
            ));

//   builder.Services.AddCors(options =>
//             {
//                 options.AddDefaultPolicy(builder =>
//                 {
//                     // var frontendURL = builder.Confi.guration.GetValue<string>("frontend_url");

//                     builder.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader();
//                     // .WithExposedHeaders(new string[] { "totalAmountOfRecords" });
//                 });
//             });

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAutoMapper(typeof(AutoMapperProfiles));
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors(policy => policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:4200"));
app.UseAuthorization();

app.MapControllers();

app.Run();
