// backend/.../repository/RepairRequestRepository.java
public interface RepairRequestRepository extends JpaRepository<RepairRequest, Long> {
  Optional<RepairRequest> findById(Long id);
  List<RepairRequest> findByUsername(String username);
}
