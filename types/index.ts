export interface Product {
  id: string;
  name: string;
  category: string;
  description?: string;
}

export interface BusinessInfo {
  name: string;
  legalName?: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  email?: string;
  gst: string;
  gstRegistrationDate: string;
  natureOfBusiness: string;
  legalStatus: string;
  annualTurnover: string;
  employees: string;
  ceo: string;
  establishedYear: string;
  contactName?: string;
  contactPhone?: string;
}
