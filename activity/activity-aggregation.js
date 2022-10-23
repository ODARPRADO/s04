db.Employee.insertMany([
/* 1 */
{
    "_id" : "312456",
    "Employee Name" : "Joongki Song",
    "Employee Age" : "28",
    "Job Role" : "Store Manager",
    "Salary" : "120000"
}

/* 2 */
{
    "_id" : "345342",
    "Employee Name" : "Joongkuk Jeon",
    "Employee Age" : "25",
    "Job Role" : "Store Associate",
    "Salary" : "45000"
}

/* 3 */
{
    "_id" : "334566",
    "Employee Name" : "Jin Kim",
    "Employee Age" : "35",
    "Job Role" : "Cashier",
    "Salary" : "67500"
}

/* 4 */
{
    "_id" : "245345",
    "Employee Name" : "Hyekyo Song",
    "Employee Age" : "40",
    "Job Role" : "\tSenior Cashier",
    "Salary" : "72500"
}

/* 5 */
{
    "_id" : "445364",
    "Employee Name" : "Tae Hyung Kim",
    "Employee Age" : "22",
    "Job Role" : "Store Associate",
    "Salary" : "35000"
}
]);

db.Inventory.insertMany([
/* 1 */
{
    "_id" : "LS0000123",
    "Name" : "XYZ Chocolate Bar - 100g",
    "Price" : "5.23",
    "Quantity" : "25000",
    "Category" : "chocolates, sweets"
}

/* 2 */
{
    "_id" : "LS0003123",
    "Name" : "Milk Non-fat - 1lt",
    "Price" : "3",
    "Quantity" : "1000",
    "Category" : "dairy, healthy"
}

/* 3 */
{
    "_id" : "LS0004566",
    "Name" : "Eggs - 12 Pack",
    "Price" : "6",
    "Quantity" : "5000",
    "Category" : "poultry, generic"
}

/* 4 */
{
    "_id" : "LS0008542",
    "Name" : "Whole Chicken",
    "Price" : "12.59",
    "Quantity" : "1250",
    "Category" : "poultry, meat"
}

/* 5 */
{
    "_id" : "LS0008543",
    "Name" : "Carrots (Packed) - 250g",
    "Price" : "3.50",
    "Quantity" : "3000",
    "Category" : "vegetables, healthy, organic"
}

/* 6 */
{
    "_id" : "LS0009846",
    "Name" : "Beans (Packed) - 250g",
    "Price" : "6.75",
    "Quantity" : "6000",
    "Category" : "vegetables, healthy, organic"
}

/* 7 */
{
    "_id" : "LS0009100",
    "Name" : "Bell Pepper (Packed) - 250 g",
    "Price" : "4.95",
    "Quantity" : "12000",
    "Category" : "vegetables, healthy, organic"
}

/* 8 */
{
    "_id" : "LS0002688",
    "Name" : "ZZ Butter - 500 g",
    "Price" : "25",
    "Quantity" : "500",
    "Category" : "dairy, healthy, premium"
}
]);
db.Payment.insertMany([
/* 1 */
{
    "_id" : "LS0000123",
    "Name" : "XYZ Chocolate Bar - 100g",
    "Price" : "5.23",
    "Quantity" : "25000",
    "Category" : "chocolates, sweets"
}

/* 2 */
{
    "_id" : "LS0003123",
    "Name" : "Milk Non-fat - 1lt",
    "Price" : "3",
    "Quantity" : "1000",
    "Category" : "dairy, healthy"
}

/* 3 */
{
    "_id" : "LS0004566",
    "Name" : "Eggs - 12 Pack",
    "Price" : "6",
    "Quantity" : "5000",
    "Category" : "poultry, generic"
}

/* 4 */
{
    "_id" : "LS0008542",
    "Name" : "Whole Chicken",
    "Price" : "12.59",
    "Quantity" : "1250",
    "Category" : "poultry, meat"
}

/* 5 */
{
    "_id" : "LS0008543",
    "Name" : "Carrots (Packed) - 250g",
    "Price" : "3.50",
    "Quantity" : "3000",
    "Category" : "vegetables, healthy, organic"
}

/* 6 */
{
    "_id" : "LS0009846",
    "Name" : "Beans (Packed) - 250g",
    "Price" : "6.75",
    "Quantity" : "6000",
    "Category" : "vegetables, healthy, organic"
}

/* 7 */
{
    "_id" : "LS0009100",
    "Name" : "Bell Pepper (Packed) - 250 g",
    "Price" : "4.95",
    "Quantity" : "12000",
    "Category" : "vegetables, healthy, organic"
}

/* 8 */
{
    "_id" : "LS0002688",
    "Name" : "ZZ Butter - 500 g",
    "Price" : "25",
    "Quantity" : "500",
    "Category" : "dairy, healthy, premium"
}
]);
db.Promo.insertMany([
    /* 1*/
    {
        "_id" : "PROMO01",
        "promo" : "Sales Promo",
        "period" : 7.0,
        "daily_sales" : [ 
            20, 
            50, 
            12, 
            30, 
            45, 
            15, 
            60
        ]
    },

    /* 2 */
    {
        "_id" : "PROMO02",
        "promo" : "Milk Promo",
        "period" : 2.0,
        "daily_sales" : [ 
            120, 
            200
        ]
    },

    /* 3 */
    {
        "_id" : "PROMO04",
        "promo" : "New Year Promo",
        "period" : 7.0,
        "daily_sales" : [ 
            68, 
            88, 
            105, 
            188, 
            74, 
            278, 
            350
        ]
    },

    /* 4 */
    {
        "_id" : "PROMO03",
        "promo" : "Meat Promo",
        "period" : 3.0,
        "daily_sales" : [ 
            101, 
            205
        ]
    }
]);