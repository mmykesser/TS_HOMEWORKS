interface Adress {
  city: string;
  street: string;
  zipCode: number;
}

interface User {
  name: string;
  age: number;
}

interface userWithAdress extends Adress, User {
  email: string;
}

const user: userWithAdress = {
  name: 'Andrzej',
  age: 52,
  email: 'andrzej@gmail.com',
  city: 'Zytomierz',
  street: 'Jana Pawla',
  zipCode: 20031,
};

console.log(user);
console.log('----------------------');

interface Product {
  name: string;
  price: number;
  category: {
    categoryName: string;
    categoryId: number;
  };
}

interface Order {
  orderId: number;
  userId: number;
  productList: Product[];
}

type Orders = Order[];

const order1: Order = {
  orderId: 1,
  userId: 1,
  productList: [
    {
      name: 'iPhone',
      price: 789,
      category: {
        categoryName: 'Smartphone',
        categoryId: 1,
      },
    },
    {
      name: 'Asus',
      price: 1489,
      category: {
        categoryName: 'Laptop',
        categoryId: 2,
      },
    },
  ],
};

const order2: Order = {
  orderId: 2,
  userId: 2,
  productList: [
    {
      name: 'MacBook',
      price: 2400,
      category: {
        categoryName: 'Laptop',
        categoryId: 2,
      },
    },
  ],
};

const orders: Orders = [order1, order2];

console.log(orders);
console.log(JSON.stringify(orders, null, 2));
console.log('-----------------------------------------------');

interface Person {
  firstName: string;
  lastName: string;
  middleName?: string;
}
function person1(person: Person): string {
  return person.middleName
    ? `${person.firstName} ${person.middleName} ${person.lastName}`
    : `${person.firstName} ${person.lastName}`;
}

const Robert: Person = {
  firstName: 'Robert',
  lastName: 'Lewandowski',
};

const Denys: Person = {
  firstName: 'Deny',
  middleName: 'Mark',
  lastName: 'Obama',
};

console.log(person1(Robert));
console.log(person1(Denys));
console.log('-----------------------------------');

interface Setting {
  theme: 'light' | 'dark';
  notifications: boolean;
  autoSave: {
    enabled: boolean;
    interval: number;
  };
}

function applySettings(setting: Setting) {
  let settings: string = `Theme: ${setting.theme} \n`;

  settings += setting.notifications
    ? `Notifications enable \n`
    : `Notifications disable \n`;

  settings += setting.autoSave.enabled
    ? `Autosave enable with time interval ${setting.autoSave.interval} minute \n`
    : `Autosave disable \n`;

  return settings;
}

const defaultSettings: Setting = {
  theme: 'dark',
  notifications: true,
  autoSave: {
    enabled: true,
    interval: 1,
  },
};

console.log(applySettings(defaultSettings));
