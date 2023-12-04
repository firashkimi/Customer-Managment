package com.firas.crudapp.service;

import com.firas.crudapp.entity.Customer;
import com.firas.crudapp.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CustomerService {

    private final CustomerRepository customerRepository;

    public Customer postCustomer(Customer customer){
        return customerRepository.save(customer);
    }
    public List<Customer> getAllCustomer(){
        return customerRepository.findAll();
    }

    public void deleteCustomer(Long id ){
        customerRepository.deleteById(id);
    }

    public Customer getCustomerById(Long id){
      return customerRepository.findById(id).orElse(null);
    }

    public Customer updateCustomer(Long id,Customer customer){
        Optional<Customer>  customerOptional = customerRepository.findById(id);
        if(customerOptional.isPresent()){

            Customer existingCustomer = customerOptional.get();
            existingCustomer.setEmail(customer.getEmail());
            existingCustomer.setName(customer.getName());
            existingCustomer.setPhone(customer.getPhone());

            return customerRepository.save(existingCustomer);
        }
        return null;

    }

}
