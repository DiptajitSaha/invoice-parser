
# Invoice Extraction Tool

## Overview

This Node.js tool extracts key details from invoice PDFs using a language model API. It retrieves:

- **Customer Details**
- **Products**
- **Total Amount**

## Features

- Extracts customer information
- Identifies and lists products
- Gets the total amount

## Getting Started

### Prerequisites

- Node.js 
- `axios` (or any HTTP client library)
- Access to an LLM API for extraction

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/DiptajitSaha/invoice-parser/tree/main
    ```

2. **Install the required packages:**

    ```bash
    npm install
    ```

### Usage

1. **Place your invoice PDFs in the `invoices/` directory.**

2. **Run the extraction script:**

    ```bash
    npx nodemon
    ```


### Example

Here's a sample output from the extraction:

```bash
{
    "extractedInfo": "```json\n{\n  \"customer_details\": {\n    \"name\": \"TEST\",\n    \"address\": \"Hyderabad, TELANGANA, 500089\",\n    \"phone\": \"9108239284\",\n    \"email\": \"test@gmail.com\"\n  },\n  \"product\": {\n    \"description\": \"WASTE AND SCRAP OF STAINLESS STEEL\",\n    \"hsn_code\": \"72042190\",\n    \"rate\": 9500,\n    \"quantity\": \"6790KGS\"\n  },\n  \"total_amount\": 768771.00\n}\n```\n"
}
```
