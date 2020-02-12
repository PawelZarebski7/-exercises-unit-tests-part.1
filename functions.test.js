const functions = require('./functions')

test('Dodawanie 2 + 2 daje 4', () =>{
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

// toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

//toBeFalsy
test('Should be falsy', () => {
    expect(functions.chceckValue(null)).toBeFalsy();
});

//toEqual firstName and lastName

test('User should be Paweł Zarębski', () => {
    expect(functions.createUser()).toEqual( { firstName: 'Paweł', lastName: 'Zarębski'});
});

// Less than and greater than

test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 799;
    expect(load1 + load2).toBeLessThan(1600);
});

//Regex

test('There is no I in team', () => {
    expect('team').not.toMatch(/I/);
})

//Arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});

//Promise

test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser()
    .then(data => {
        expect(data.name).toEqual('Leanne Graham');
    })
});

// Async Await

test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});