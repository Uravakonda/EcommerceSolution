using ecommerceapi.Data;
using ecommerceapi.Models;
using Microsoft.AspNetCore.Mvc;

namespace ecommerceapi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class OrdersController : ControllerBase
{
    private readonly EcommerceContext _context;

    public OrdersController(EcommerceContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> PlaceOrder(Order order)
    {
        _context.Orders.Add(order);
        await _context.SaveChangesAsync();
        return Ok(new { message = "Order placed successfully!", orderId = order.Id });
    }
}