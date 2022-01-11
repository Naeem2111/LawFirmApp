const countries = [
  {
    id: 105,
    countryDescription: 'South Africa',
    riskRating: 1,
    riskLevel: 'Low',
    vendorRiskScore: 66.81
  },
  {
    id: 214,
    countryDescription: 'Afghanistan',
    riskRating: 3,
    riskLevel: 'Auto High',
    vendorRiskScore: 38.13
  },
  {
    id: 160,
    countryDescription: 'Albania',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 60.34
  },
  {
    id: 153,
    countryDescription: 'Algeria',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 60.67
  },
  {
    id: 15,
    countryDescription: 'American Samoa',
    riskRating: 1,
    riskLevel: 'Low',
    vendorRiskScore: 80.66
  },
  {
    id: 28,
    countryDescription: 'Andorra',
    riskRating: 1,
    riskLevel: 'Low',
    vendorRiskScore: 76.26
  },
  {
    id: 127,
    countryDescription: 'Angola',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 63.07
  },
  {
    id: 35,
    countryDescription: 'Anguilla',
    riskRating: 1,
    riskLevel: 'Low',
    vendorRiskScore: 75.86
  },
  {
    id: 162,
    countryDescription: 'Antigua and Barbuda',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 60.2
  },
  {
    id: 58,
    countryDescription: 'Argentina',
    riskRating: 1,
    riskLevel: 'Low',
    vendorRiskScore: 72.83
  },
  {
    id: 155,
    countryDescription: 'Armenia',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 60.51
  },
  {
    id: 68,
    countryDescription: 'Aruba',
    riskRating: 1,
    riskLevel: 'Low',
    vendorRiskScore: 71.49
  },
  {
    id: 24,
    countryDescription: 'Australia',
    riskRating: 1,
    riskLevel: 'Low',
    vendorRiskScore: 76.91
  },
  {
    id: 26,
    countryDescription: 'Austria',
    riskRating: 1,
    riskLevel: 'Low',
    vendorRiskScore: 76.58
  },
  {
    id: 182,
    countryDescription: 'Azerbaijan',
    riskRating: 3,
    riskLevel: 'High',
    vendorRiskScore: 56.32
  },
  {
    id: 202,
    countryDescription: 'Bahamas',
    riskRating: 3,
    riskLevel: 'Auto High',
    vendorRiskScore: 47.51
  },
  {
    id: 119,
    countryDescription: 'Bahrain',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 64.54
  },
  {
    id: 100,
    countryDescription: 'Bangladesh',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 67.3
  },
  {
    id: 122,
    countryDescription: 'Barbados',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 63.56
  },
  {
    id: 184,
    countryDescription: 'Belarus',
    riskRating: 3,
    riskLevel: 'High',
    vendorRiskScore: 56.08
  },
  {
    id: 21,
    countryDescription: 'Belgium',
    riskRating: 1,
    riskLevel: 'Low',
    vendorRiskScore: 77.94
  },
  {
    id: 146,
    countryDescription: 'Belize',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 61.89
  },
  {
    id: 136,
    countryDescription: 'Benin',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 62.65
  },
  {
    id: 32,
    countryDescription: 'Bermuda',
    riskRating: 1,
    riskLevel: 'Low',
    vendorRiskScore: 76.02
  },
  {
    id: 33,
    countryDescription: 'Bhutan',
    riskRating: 1,
    riskLevel: 'Low',
    vendorRiskScore: 75.9
  },
  {
    id: 177,
    countryDescription: 'Bolivia',
    riskRating: 3,
    riskLevel: 'High',
    vendorRiskScore: 57.61
  },
  {
    id: 195,
    countryDescription: 'Bosnia-Herzegovina',
    riskRating: 3,
    riskLevel: 'High',
    vendorRiskScore: 52.02
  },
  {
    id: 158,
    countryDescription: 'Botswana',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 60.37
  },
  {
    id: 186,
    countryDescription: 'Brazil',
    riskRating: 3,
    riskLevel: 'High',
    vendorRiskScore: 55.68
  },
  {
    id: 137,
    countryDescription: 'British Virgin Islands',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 62.55
  },
  {
    id: 40,
    countryDescription: 'Brunei Darussalam',
    riskRating: 1,
    riskLevel: 'Low',
    vendorRiskScore: 75.52
  },
  {
    id: 71,
    countryDescription: 'Bulgaria',
    riskRating: 1,
    riskLevel: 'Low',
    vendorRiskScore: 71.24
  },
  {
    id: 52,
    countryDescription: 'Burkina Faso',
    riskRating: 1,
    riskLevel: 'Low',
    vendorRiskScore: 73.94
  },
  {
    id: 194,
    countryDescription: 'Burundi',
    riskRating: 3,
    riskLevel: 'High',
    vendorRiskScore: 53.02
  },
  {
    id: 134,
    countryDescription: 'Cambodia',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 62.79
  },
  {
    id: 78,
    countryDescription: 'Cameroon',
    riskRating: 1,
    riskLevel: 'Low',
    vendorRiskScore: 70.54
  },
  {
    id: 19,
    countryDescription: 'Canada',
    riskRating: 1,
    riskLevel: 'Low',
    vendorRiskScore: 78.76
  },
  {
    id: 170,
    countryDescription: 'Cape Verde',
    riskRating: 3,
    riskLevel: 'High',
    vendorRiskScore: 59.19
  },
  {
    id: 89,
    countryDescription: 'Cayman Islands',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 69.23
  },
  {
    id: 191,
    countryDescription: 'Central African Rep',
    riskRating: 3,
    riskLevel: 'High',
    vendorRiskScore: 54.37
  },
  {
    id: 90,
    countryDescription: 'Chad',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 69.07
  },
  {
    id: 41,
    countryDescription: 'Chile',
    riskRating: 1,
    riskLevel: 'Low',
    vendorRiskScore: 75.45
  },
  {
    id: 125,
    countryDescription: 'China',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 63.1
  },
  {
    id: 107,
    countryDescription: 'Colombia',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 66.77
  },
  {
    id: 163,
    countryDescription: 'Comoros',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 60.07
  },
  {
    id: 93,
    countryDescription: 'Congo (Brazzaville)',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 68.58
  },
  {
    id: 200,
    countryDescription: 'Congo, the Democratic Republic',
    riskRating: 3,
    riskLevel: 'Auto High',
    vendorRiskScore: 48.11
  },
  {
    id: 106,
    countryDescription: 'Cook Islands',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 66.79
  },
  {
    id: 101,
    countryDescription: 'Costa Rica',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 67.25
  },
  {
    id: 112,
    countryDescription: "Cote D'Ivoire",
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 66.27
  },
  {
    id: 37,
    countryDescription: 'Croatia',
    riskRating: 1,
    riskLevel: 'Low',
    vendorRiskScore: 75.73
  },
  {
    id: 145,
    countryDescription: 'Cuba',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 61.91
  },
  {
    id: 147,
    countryDescription: 'Curacao',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 61.65
  },
  {
    id: 63,
    countryDescription: 'Cyprus',
    riskRating: 1,
    riskLevel: 'Low',
    vendorRiskScore: 71.86
  },
  {
    id: 50,
    countryDescription: 'Czech Republic',
    riskRating: 1,
    riskLevel: 'Low',
    vendorRiskScore: 74.32
  },
  {
    id: 7,
    countryDescription: 'Denmark',
    riskRating: 1,
    riskLevel: 'Low',
    vendorRiskScore: 84
  },
  {
    id: 114,
    countryDescription: 'Djibouti',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 65.94
  },
  {
    id: 165,
    countryDescription: 'Dominica ',
    riskRating: 3,
    riskLevel: 'High',
    vendorRiskScore: 59.96
  },
  {
    id: 138,
    countryDescription: 'Dominican Republic',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 62.47
  },
  {
    id: 190,
    countryDescription: 'Ecuador',
    riskRating: 3,
    riskLevel: 'High',
    vendorRiskScore: 55.32
  },
  {
    id: 196,
    countryDescription: 'Egypt',
    riskRating: 3,
    riskLevel: 'High',
    vendorRiskScore: 50.71
  },
  {
    id: 128,
    countryDescription: 'El Salvador',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 63.05
  },
  {
    id: 95,
    countryDescription: 'Equatorial Guinea',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 68.16
  },
  {
    id: 132,
    countryDescription: 'Eritrea',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 62.85
  },
  {
    id: 4,
    countryDescription: 'Estonia',
    riskRating: 1,
    riskLevel: 'Low',
    vendorRiskScore: 87.85
  },
  {
    id: 174,
    countryDescription: 'Ethiopia',
    riskRating: 3,
    riskLevel: 'High',
    vendorRiskScore: 58.28
  },
  {
    id: 45,
    countryDescription: 'Fiji',
    riskRating: 1,
    riskLevel: 'Low',
    vendorRiskScore: 75.23
  },
  {
    id: 2,
    countryDescription: 'Finland',
    riskRating: 1,
    riskLevel: 'Low',
    vendorRiskScore: 89.61
  },
  {
    id: 13,
    countryDescription: 'France',
    riskRating: 1,
    riskLevel: 'Low',
    vendorRiskScore: 81.65
  },
  {
    id: 55,
    countryDescription: 'Gabon',
    riskRating: 1,
    riskLevel: 'Low',
    vendorRiskScore: 73.45
  },
  {
    id: 108,
    countryDescription: 'Gambia',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 66.61
  },
  {
    id: 187,
    countryDescription: 'Gaza Strip',
    riskRating: 3,
    riskLevel: 'High',
    vendorRiskScore: 55.58
  },
  {
    id: 104,
    countryDescription: 'Georgia',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 66.86
  },
  {
    id: 10,
    countryDescription: 'Germany',
    riskRating: 1,
    riskLevel: 'Low',
    vendorRiskScore: 82.72
  },
  {
    id: 199,
    countryDescription: 'Ghana',
    riskRating: 3,
    riskLevel: 'Auto High',
    vendorRiskScore: 48.13
  },
  {
    id: 99,
    countryDescription: 'Gibraltar',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 67.38
  },
  {
    id: 23,
    countryDescription: 'Greece',
    riskRating: 1,
    riskLevel: 'Low',
    vendorRiskScore: 77.38
  },
  {
    id: 121,
    countryDescription: 'Grenada',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 63.81
  },
  {
    id: 30,
    countryDescription: 'Guam',
    riskRating: 1,
    riskLevel: 'Low',
    vendorRiskScore: 76.13
  },
  {
    id: 179,
    countryDescription: 'Guatemala',
    riskRating: 3,
    riskLevel: 'High',
    vendorRiskScore: 57.13
  },
  {
    id: 43,
    countryDescription: 'Guernsey ',
    riskRating: 1,
    riskLevel: 'Low',
    vendorRiskScore: 75.27
  },
  {
    id: 161,
    countryDescription: 'Guinea',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 60.24
  },
  {
    id: 208,
    countryDescription: 'Guinea Bissau',
    riskRating: 3,
    riskLevel: 'Auto High',
    vendorRiskScore: 43.54
  },
  {
    id: 120,
    countryDescription: 'Guyana',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 64.05
  },
  {
    id: 204,
    countryDescription: 'Haiti',
    riskRating: 3,
    riskLevel: 'Auto High',
    vendorRiskScore: 46.85
  },
  {
    id: 97,
    countryDescription: 'Honduras',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 67.69
  },
  {
    id: 87,
    countryDescription: 'Hong Kong',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 69.42
  },
  {
    id: 69,
    countryDescription: 'Hungary',
    riskRating: 1,
    riskLevel: 'Low',
    vendorRiskScore: 71.45
  },
  {
    id: 11,
    countryDescription: 'Iceland',
    riskRating: 1,
    riskLevel: 'Low',
    vendorRiskScore: 82.36
  },
  {
    id: 84,
    countryDescription: 'India',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 69.75
  },
  {
    id: 129,
    countryDescription: 'Indonesia',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 62.99
  },
  {
    id: 219,
    countryDescription: 'Iran, Islamic Republic of',
    riskRating: 3,
    riskLevel: 'Auto High',
    vendorRiskScore: 17.33
  },
  {
    id: 207,
    countryDescription: 'Iraq',
    riskRating: 3,
    riskLevel: 'Auto High',
    vendorRiskScore: 44.2
  },
  {
    id: 20,
    countryDescription: 'Ireland',
    riskRating: 1,
    riskLevel: 'Low',
    vendorRiskScore: 78.56
  },
  {
    id: 49,
    countryDescription: 'Isle Of Man',
    riskRating: 1,
    riskLevel: 'Low',
    vendorRiskScore: 74.56
  },
  {
    id: 117,
    countryDescription: 'Israel',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 64.89
  },
  {
    id: 48,
    countryDescription: 'Italy',
    riskRating: 1,
    riskLevel: 'Low',
    vendorRiskScore: 74.6
  },
  {
    id: 143,
    countryDescription: 'Jamaica',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 62.13
  },
  {
    id: 109,
    countryDescription: 'Japan',
    riskRating: 2,
    riskLevel: 'Medium',
    vendorRiskScore: 66.45
  },

]


export default countries
