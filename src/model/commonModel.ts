interface product {
    "name": string;
    "description": string;
}
interface partDataDetails {
    "predicted"?: number | string;
    "actual"?: number | string;
}

export interface partData {
    "moda"?: partDataDetails;
    "mtbi"?: partDataDetails;
    "smr_code"?: partDataDetails;
    "mttr": partDataDetails;
    "drt": partDataDetails;
    "rtat": partDataDetails;
    "mc_rate": partDataDetails;
    "nmc_rate": partDataDetails;
    "bit_coverage": partDataDetails;
    "am": partDataDetails;
    "ao": partDataDetails;
    "dmsm": partDataDetails;
}

export interface PartDetails {
    "id"?: number;
    "partNumber"?: string;
    "serial_numbers"?: number[],
    "lot_number_id"?: number[];
    "image"?: string;
    "data"?: partData;
    "configuration"?: string;
    "part"?: string;
    "nomenclature"?: string;
    "product"?: product[]
}
