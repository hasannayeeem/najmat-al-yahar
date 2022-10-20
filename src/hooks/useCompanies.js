import { useEffect, useState } from "react";

const useCompanies = () => {
  const [companies, setCompanies] = useState([]);
//   const [companiesLoading, setCompaniesLoading] = useState(true);
    console.log(companies);
  useEffect(() => {
    fetch("companies.json")
      .then((res) => res.json())
      .then((data) => {
        setCompanies(data)
        // setCompanies(false)
      });
  }, []);
  return [companies, setCompanies];
};

export default useCompanies;
