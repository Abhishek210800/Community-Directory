import React, { createContext, useContext, useState } from 'react';


const initialData = {
  directoryDetails: [
    {
      tenant_id: 2,
      name: "Panalink Infotech Ltd.",
      contactPerson: "Mr. Subhash Palsule",
      briefDescription: null,
      description: null,
      directoryShortCode: "panalink",
      address: "K-128 Ranjit Sadan",
      city: "New Delhi",
      state: "Delhi",
      country: "India",
      phone: "91 7838880385",
      email: "subhash@panalinks.com",
      services: "Healthcare,Travel & Hospitality,Computer & IT,Others,",
      website: "www.panalinks.com",
      companyLogo: "panalink-logo-final-newpng.webp",
      companyLogoURL: "https://app.aktivedirectory.com/assets/images/",
      status: "Active",
      created_at: "2024-11-07 06:12:45",
    },
  ],
  directoryCategories: [
    { category_id: 1, catName: "Technology", descriptions: "Technology", cstatus: "A" },
    { category_id: 2, catName: "Healthcare", descriptions: "Healthcare", cstatus: "A" },
    { category_id: 3, catName: "Entertainment", descriptions: "Entertainment", cstatus: "A" },
    { category_id: 4, catName: "Marketing", descriptions: "Marketing", cstatus: "A" },
    { category_id: 5, catName: "Travel & Hospitality", descriptions: "Travel & Hospitality", cstatus: "A" },
    { category_id: 6, catName: "Real Estate", descriptions: "Real Estate", cstatus: "A" },
    { category_id: 7, catName: "Computer & IT", descriptions: "Computer & IT", cstatus: "A" },
    { category_id: 8, catName: "Finance", descriptions: "Finance", cstatus: "A" },
    { category_id: 9, catName: "Manufacturing", descriptions: "Manufacturing", cstatus: "A" },
    { category_id: 10, catName: "Others", descriptions: "Others", cstatus: "A" },
  ],
  directoryCompanies: [
    {
      "company_id": 1,
      "tenant_id": 2,
      "name": "Sunvera Software",
      "contactPerson": "Ram Iyer",
      "briefDescription": "Sadbhav Solar Network Portal",
      "description": "Sadbhav Solar Network",
      "address": "249 Udyog Vihar, Phase -4",
      "city": "Gurgaon",
      "state": "Haryana",
      "country": "India",
      "phone": "+1 949-284-6300",
      "email": "contact@sunverasoftware.com",
      "services": " Technology,Marketing,",
      "website": "www.sunverasoftware.com",
      "companyLogo": "sunvera.jpg",
      "companyLogoURL": "https://app.aktivedirectory.com/assets/images/",
      "facebookUrl": null,
      "instagramUrl": null,
      "twitterUrl": null,
      "linkedInUrl": null,
      "status": "Active",
      "created_at": "2023-11-21 14:28:36"
    },
    {
      "company_id": 4,
      "tenant_id": 2,
      "name": "Panalink Infotech Ltd.",
      "contactPerson": "Mr. Subhash Palsule",
      "briefDescription": null,
      "description": null,
      "address": "K-128 Ranjit Sadan",
      "city": "New Delhi",
      "state": "Delhi",
      "country": "India",
      "phone": "91 7838880385",
      "email": "subhash@panalinks.com",
      "services": " Healthcare,Travel & Hospitality,Computer & IT,Others,",
      "website": "www.panalinks.com",
      "companyLogo": "panalink-logo-final-newpng.webp",
      "companyLogoURL": "https://app.aktivedirectory.com/assets/images/",
      "facebookUrl": null,
      "instagramUrl": null,
      "twitterUrl": null,
      "linkedInUrl": null,
      "status": "Active",
      "created_at": "2025-01-10 06:12:45"
    },
    {
      "company_id": 5,
      "tenant_id": 2,
      "name": "Techinfo",
      "contactPerson": "Jitender",
      "briefDescription": null,
      "description": null,
      "address": "Bhika ji cama place",
      "city": "New Delhi",
      "state": "Delhi",
      "country": "India",
      "phone": "91 7838880385",
      "email": "info@techinfo.com",
      "services": " Technology,Healthcare,Entertainment,Real Estate,Manufacturing,",
      "website": "www.techinfo.com",
      "companyLogo": "Web-logo-qmguod1hbvsa3odxfcuilggbszenooki13m5ssc8tc.png",
      "companyLogoURL": "https://app.aktivedirectory.com/assets/images/",
      "facebookUrl": null,
      "instagramUrl": null,
      "twitterUrl": null,
      "linkedInUrl": null,
      "status": "Active",
      "created_at": "2024-11-07 06:59:35"
    },
    {
      "company_id": 6,
      "tenant_id": 2,
      "name": "Revanya LLC",
      "contactPerson": "Rajeev Nanda",
      "briefDescription": "",
      "description": "",
      "address": "Santa Clara, ",
      "city": "California ",
      "state": "California ",
      "country": "United States",
      "phone": "9191919191",
      "email": "nanda.rajeev@gmail.com",
      "services": "Computer & IT,Technology",
      "website": "https://www.rnanda.com/",
      "companyLogo": "4e957730-08ab-446b-af89-4fc5d4458f5d.jpeg",
      "companyLogoURL": "https://app.aktivedirectory.com/assets/images/",
      "facebookUrl": "",
      "instagramUrl": "",
      "twitterUrl": "",
      "linkedInUrl": "https://www.linkedin.com/in/rajeevnanda/",
      "status": "Active",
      "created_at": "2024-11-28 10:00:43"
    }
  ],
};

// Create the context
const DirectoryContext = createContext();

// Provider component
export const DirectoryProvider = ({ children }) => {
  const [directoryData, setDirectoryData] = useState(initialData);

  return (
    <DirectoryContext.Provider value={{ directoryData, setDirectoryData }}>
      {children}
    </DirectoryContext.Provider>
  );
};

// Hook for consuming the context
export const useDirectory = () => {
  return useContext(DirectoryContext);
};
