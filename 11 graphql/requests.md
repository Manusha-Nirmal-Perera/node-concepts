# GraphQL Queries and Mutations

## Get all products
```graphql
query{
  products {
    title
    category
    id
    inStock
  }
}
```

## Get product by ID
```graphql
query{
  product(id: "67c99be5908bb18a850b08d0") {
    title
    category
    inStock
    price
    id
  }
}
```
## create product
```graphql
mutation{
  createProduct(title: "New pr", category: "electronics", price: 500, inStock: true) {
    title
    category
    price
    inStock
    id
  }
}
```

## Delete product
```graphql
mutation{
  deleteProduct(id: "67c99e600188fde8746058f6")
}
```

## Update product
```graphql
mutation{
  updateProduct(id: "67c99be5908bb18a850b08d0", title: "updated") {
    title
    category
    price
    inStock
    id
  }
}
```