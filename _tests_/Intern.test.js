const Intern = require('../lib/Intern');

test('creates an object to hold intern', () => {
    const intern = new Intern('Test', 10, 'test@gmail.com', 'UofA');

    expect(intern.school).toEqual(expect.any(String));
});

test('gets school of intern', () => {
    const intern = new Intern('Test', 10, 'test@gmail.com', 'UofA');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of intern', () => {
    const intern = new Intern('Test', 10, 'test@gmail.com', 'UofA');

    expect(intern.getRole()).toEqual("Intern");
});