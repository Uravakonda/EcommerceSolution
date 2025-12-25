namespace ecommerceapi.Models;

public class Order
{
    public int Id { get; set; }
    public required string CustomerName { get; set; }
    public required string CustomerAddress { get; set; }
    public decimal TotalAmount { get; set; }
    public DateTime OrderDate { get; set; } = DateTime.Now;
    public List<OrderItem> Items { get; set; } = new();
}