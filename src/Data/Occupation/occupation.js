// Ocupation Type	Risk Score 	Impairment class	Risk Occupation Category	Category 	Current Occ Cat
// Abattoir Worker	30	D	1	Manual labour	1
// Academic Development Coordinator	30	A	1	Academic	1
// Academic Lecturer 	30	A	1	Academic	1
// Account Executive	30	A	1	Finance/Accounting	1
// Account Manager	30	A	1	Finance/Accounting	1
// Account Technical	30	A	1	Finance/Accounting	1
// Accountant	30	A	1	Finance/Accounting	1
// Acoustician                                                 	30	A	1	Scientist	1
// Actor	30	D	1	Media/print/entertainment	1

const occupation = [
  {
    id: 1,
    occupationType: 'Abattoir Worker',
    riskRating: 2,
    riskLevel: 'Medium',
    impairmentClassification: 'D',
    category: 'Manual Labor'
  },
  {
    id: 2,
    occupationType: 'Academic Lecturer',
    riskRating: 1,
    riskLevel: 'Low',
    impairmentClassification: 'A',
    category: 'Academic'
  }
]

export default occupation
