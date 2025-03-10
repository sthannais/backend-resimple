export const getCompanyById = (companiesDb, companiesCsv) => {
  return companiesDb.flatMap((company) => {
    const companiesMerges = companiesCsv.find(
      (c) => c.ID_EMPRESA === company.company_id,
    );
    if (!companiesMerges) {
      return payloadReturnData(company);
    }
    return companiesMerges.AREAS.map((area) => {
      return payloadReturnData(company, area, companiesMerges.NOMBRE_EMPRESA);
    });
  });
};

const payloadReturnData = (company, area = null, nameCompany = null) => {
  return {
    name_company: nameCompany || 'Sin empresa',
    area: area.NOMBRE_AREA || 'Sin área',
    rut_worked: company.rut_trabajador,
    name_worked: company.name_worker,
    age: area.SUELDO,
    profession: company.profession,
    position: company.position,
    salary: area.SUELDO,
  };
};
