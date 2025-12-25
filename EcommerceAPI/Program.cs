using ecommerceapi.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<EcommerceContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));


builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy => policy
            .WithOrigins("http://localhost:5173", "http://localhost:3000")
            .AllowAnyMethod()
            .AllowAnyHeader());
});

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<EcommerceContext>();
    context.Database.EnsureCreated(); 

    if (!context.Products.Any())
    {
        context.Products.AddRange(
            new ecommerceapi.Models.Product { Name = "Iiyama G-Master", Price = 250, ImageUrl = "/images/iiyama.jpg", Category = "Monitors" },
            new ecommerceapi.Models.Product { Name = "iPad Mini 2023", Price = 499, ImageUrl = "/images/iPadmini.jpg", Category = "Tablets" },
            new ecommerceapi.Models.Product { Name = "iPhone 17 Pro Max", Price = 1199, ImageUrl = "/images/iphone17pm.jpeg", Category = "Phones" },
            new ecommerceapi.Models.Product { Name = "MacBook Pro M4", Price = 1899, ImageUrl = "/images/macbookpro.jpeg", Category = "Laptops" }
        );
        context.SaveChanges();
    }
}

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseStaticFiles(); //images from wwwroot
app.UseCors("AllowReactApp");
app.UseAuthorization();
app.MapControllers();

app.Run();