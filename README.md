
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
    
    "extractedInfo": {
        "customer_details": {
            "name": "Test",
            "address": "Hyderabad, TELANGANA, 500089",
            "phone": "9108239284",
            "email": "test@gmail.com"
        },
        "product": {
            "name": "WASTE AND SCRAP OF STAINLESS STEEL",
            "hsn": "72042190",
            "rate": 9500,
            "quantity": "6790KGS"
        },
        "total_amount": {
            "taxable_amount": 645050,
            "gst": 116100,
            "tcs": 7611.5,
            "round_off": 0.41,
            "total": 768771,
            "in_words": "INR Seven Lakh, Sixty-Eight Thousand, Seven Hundred And Seventy-One Rupees Only"
        }
    }
    

}
```
