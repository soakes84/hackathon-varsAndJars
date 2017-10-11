package org.theironyard.hackathon;


import java.util.List;

public interface PersonService {
    Person add(Person person);

    List<Person> findAll();
    Person find(int id);
    void update(Person person);
    void delete(int id);

}
