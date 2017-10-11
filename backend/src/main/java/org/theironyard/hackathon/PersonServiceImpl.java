package org.theironyard.hackathon;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class PersonServiceImpl implements PersonService {
    @Autowired
    PersonRepository personRepository;

    @Transactional
    @Override
    public Person add(Person peep) {
        return personRepository.save(peep);
    }

    @Override
    @Transactional(readOnly = true)
    public Person find(int id) {
        return personRepository.findOne(id);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Person> findAll() {
        return personRepository.findAll();
    }

    @Transactional
    @Override
    public void update(Person person) {
        personRepository.save(person);
    }

    @Transactional
    @Override
    public void delete(int id) {

        personRepository.delete(id);
    }

}
