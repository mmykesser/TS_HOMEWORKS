interface phones {
  name: string;
  price: number;
  availability: boolean;
  [key: string]: string | number | boolean;
}

function printInfo(phones: phones) {
  return console.log(
    `Phone: ${phones.name}, ${phones.price} $,${phones.availability ? `Phone in stock` : `Phone out of stock`}`
  );
}

function print2(phones: phones) {
  let result = '';
  for (const key in phones) {
    if (key === 'price') {
      result += `${phones[key]} $,`;
    } else if (key === 'availability') {
      result += `${phones[key] ? 'Phone in stock' : 'Phone out of stock'}`;
    } else {
      result += `${phones[key]} `;
    }
  }
  console.log(result);
}

const myPhones: phones = {
  name: 'iPhone',
  price: 410,
  availability: true,
};

const oldPhone: phones = {
  name: 'Nokia',
  price: 9450,
  availability: false,
};

printInfo(myPhones);
printInfo(oldPhone);

print2(myPhones);
print2(oldPhone);
