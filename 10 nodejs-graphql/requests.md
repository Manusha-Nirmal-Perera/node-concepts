# GraphQL Queries and Mutations

## Get all products
```graphql
query {
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
query {
  product(id: "3") {
    title
    category
  }
}
```
## create product
```graphql
mutation {
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
mutation {
  deleteProduct(id: "4")
}
```

## Update product
```graphql
mutation {
  updateProduct(id: "1", title: "Desktop") {
    title
    category
    price
    inStock
  }
}
```