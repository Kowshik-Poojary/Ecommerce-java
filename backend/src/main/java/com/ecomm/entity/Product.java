// backend/.../entity/Product.java
@Entity
@Table(name="products")
public class Product {
  @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
  private Long id;
  private String name;
  private String description;
  private double price;
  private String imageUrl;
  // getters/setters
}
