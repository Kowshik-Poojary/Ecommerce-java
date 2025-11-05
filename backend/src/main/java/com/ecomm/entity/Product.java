import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

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
