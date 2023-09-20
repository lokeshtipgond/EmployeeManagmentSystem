package com.example.demo.Repository;

import com.example.demo.Entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;




@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}