const { outputJsonSync, outputJSON } = require('fs-extra');
let converter = require('json-2-csv');
// Landlord query --------------------------------- 

{
    "data": [
        {
            "id": "6003385478363",
            "name": "Landlord",
            "audience_size_lower_bound": 18056710,
            "audience_size_upper_bound": 21243188,
            "audience_size": 18056710,
            "path": [
                "Interests",
                "Additional Interests",
                "Landlord"
            ],
            "description": null,
            "topic": "Business and industry"
        },
        {
            "id": "6003699539090",
            "name": "Landlord–tenant law",
            "audience_size_lower_bound": 417140,
            "audience_size_upper_bound": 490752,
            "audience_size": 417140,
            "path": [
                "Interests",
                "Additional Interests",
                "Landlord–tenant law"
            ],
            "description": null,
            "disambiguation_category": "Field of Study",
            "topic": "Education"
        }
    ]
}


// Renting ---------------------------------

{
    "data": [
        {
            "id": "6003327442454",
            "name": "Rent (film)",
            "audience_size_lower_bound": 205292580,
            "audience_size_upper_bound": 241520682,
            "audience_size": 205292580,
            "path": [
                "Interests",
                "Additional Interests",
                "Rent (film)"
            ],
            "description": null,
            "topic": "News and entertainment"
        },
        {
            "id": "6003328429697",
            "name": "Renting",
            "audience_size_lower_bound": 125206650,
            "audience_size_upper_bound": 147301941,
            "audience_size": 125206650,
            "path": [
                "Interests",
                "Additional Interests",
                "Renting"
            ],
            "description": null,
            "topic": "News and entertainment"
        },
        {
            "id": "6003899365666",
            "name": "Discounting",
            "audience_size_lower_bound": 57814962,
            "audience_size_upper_bound": 68017602,
            "audience_size": 57814962,
            "path": [
                "Interests",
                "Additional Interests",
                "Discounting"
            ],
            "description": null,
            "topic": "Business and industry"
        },
        {
            "id": "6003674030262",
            "name": "Interest",
            "audience_size_lower_bound": 21607690,
            "audience_size_upper_bound": 25420811,
            "audience_size": 21607690,
            "path": [
                "Interests",
                "Additional Interests",
                "Interest"
            ],
            "description": null,
            "topic": "Lifestyle and culture"
        },
        {
            "id": "6003388228312",
            "name": "Rent-to-own",
            "audience_size_lower_bound": 17523370,
            "audience_size_upper_bound": 20615729,
            "audience_size": 17523370,
            "path": [
                "Interests",
                "Additional Interests",
                "Rent-to-own"
            ],
            "description": null,
            "topic": "Business and industry"
        },
        {
            "id": "6003444791871",
            "name": "Yeast",
            "audience_size_lower_bound": 17138070,
            "audience_size_upper_bound": 20162435,
            "audience_size": 17138070,
            "path": [
                "Interests",
                "Additional Interests",
                "Yeast"
            ],
            "description": null,
            "topic": "Food and drink"
        },
        {
            "id": "6003174498414",
            "name": "Baking powder",
            "audience_size_lower_bound": 15407480,
            "audience_size_upper_bound": 18126447,
            "audience_size": 15407480,
            "path": [
                "Interests",
                "Additional Interests",
                "Baking powder"
            ],
            "description": null,
            "topic": "Food and drink"
        },
        {
            "id": "6003534669198",
            "name": "Rent-A-Center",
            "audience_size_lower_bound": 4124340,
            "audience_size_upper_bound": 4852164,
            "audience_size": 4124340,
            "path": [
                "Interests",
                "Additional Interests",
                "Rent-A-Center"
            ],
            "description": null,
            "disambiguation_category": "Local Business",
            "topic": "Business and industry"
        },
        {
            "id": "6003249974776",
            "name": "Rent.com",
            "audience_size_lower_bound": 3477986,
            "audience_size_upper_bound": 4091748,
            "audience_size": 3477986,
            "path": [
                "Interests",
                "Additional Interests",
                "Rent.com"
            ],
            "description": null,
            "disambiguation_category": "Website",
            "topic": "Business and industry"
        },
        {
            "id": "6010643219516",
            "name": "Enterprise Rent-A-Car",
            "audience_size_lower_bound": 2942020,
            "audience_size_upper_bound": 3461200,
            "audience_size": 2942020,
            "path": [
                "Interests",
                "Additional Interests",
                "Enterprise Rent-A-Car"
            ],
            "description": null,
            "disambiguation_category": "Local Business",
            "topic": "Business and industry"
        },
        {
            "id": "6005463824263",
            "name": "Rent the Runway",
            "audience_size_lower_bound": 1313770,
            "audience_size_upper_bound": 1545611,
            "audience_size": 1313770,
            "path": [
                "Interests",
                "Additional Interests",
                "Rent the Runway"
            ],
            "description": null,
            "disambiguation_category": "Website",
            "topic": "Shopping and fashion"
        },
        {
            "id": "6003508450042",
            "name": "Council house",
            "audience_size_lower_bound": 1105300,
            "audience_size_upper_bound": 1300352,
            "audience_size": 1105300,
            "path": [
                "Interests",
                "Additional Interests",
                "Council house"
            ],
            "description": null,
            "topic": "News and entertainment"
        },
        {
            "id": "6003352409519",
            "name": "Budget Rent a Car",
            "audience_size_lower_bound": 1064730,
            "audience_size_upper_bound": 1252623,
            "audience_size": 1064730,
            "path": [
                "Interests",
                "Additional Interests",
                "Budget Rent a Car"
            ],
            "description": null,
            "disambiguation_category": "Local Business",
            "topic": "Business and industry"
        },
        {
            "id": "6003364749851",
            "name": "Life annuity",
            "audience_size_lower_bound": 987920,
            "audience_size_upper_bound": 1162258,
            "audience_size": 987920,
            "path": [
                "Interests",
                "Additional Interests",
                "Life annuity"
            ],
            "description": null
        },
        {
            "id": "6003665142311",
            "name": "Dollar Thrifty Automotive Group",
            "audience_size_lower_bound": 603400,
            "audience_size_upper_bound": 709882,
            "audience_size": 603400,
            "path": [
                "Interests",
                "Additional Interests",
                "Dollar Thrifty Automotive Group"
            ],
            "description": null,
            "topic": "Business and industry"
        },
        {
            "id": "6003745590304",
            "name": "ForRent.com",
            "audience_size_lower_bound": 449880,
            "audience_size_upper_bound": 529270,
            "audience_size": 449880,
            "path": [
                "Interests",
                "Additional Interests",
                "ForRent.com"
            ],
            "description": null,
            "disambiguation_category": "Real Estate Service",
            "topic": "Business and industry"
        },
        {
            "id": "6003125010376",
            "name": "Rent a Car",
            "audience_size_lower_bound": 304213,
            "audience_size_upper_bound": 357897,
            "audience_size": 304213,
            "path": [
                "Interests",
                "Additional Interests",
                "Rent a Car"
            ],
            "description": null
        },
        {
            "id": "6003134786576",
            "name": "Avis Rent a Car System",
            "audience_size_lower_bound": 299284,
            "audience_size_upper_bound": 352098,
            "audience_size": 299284,
            "path": [
                "Interests",
                "Additional Interests",
                "Avis Rent a Car System"
            ],
            "description": null,
            "disambiguation_category": "Local Business",
            "topic": "Travel, places and events"
        },
        {
            "id": "6003011924681",
            "name": "Alamo Rent a Car",
            "audience_size_lower_bound": 267410,
            "audience_size_upper_bound": 314600,
            "audience_size": 267410,
            "path": [
                "Interests",
                "Additional Interests",
                "Alamo Rent a Car"
            ],
            "description": null,
            "disambiguation_category": "Local Business",
            "topic": "Business and industry"
        },
        {
            "id": "6003193221813",
            "name": "Sixt rent a car",
            "audience_size_lower_bound": 104940,
            "audience_size_upper_bound": 123458,
            "audience_size": 104940,
            "path": [
                "Interests",
                "Additional Interests",
                "Sixt rent a car"
            ],
            "description": null,
            "disambiguation_category": "Car Rental",
            "topic": "Hobbies and activities"
        },
        {
            "id": "6003153691949",
            "name": "Rent-seeking",
            "audience_size_lower_bound": 59606,
            "audience_size_upper_bound": 70124,
            "audience_size": 59606,
            "path": [
                "Interests",
                "Additional Interests",
                "Rent-seeking"
            ],
            "description": null,
            "topic": "Lifestyle and culture"
        },
        {
            "id": "6003229150498",
            "name": "Fox Rent A Car",
            "audience_size_lower_bound": 51739,
            "audience_size_upper_bound": 60869,
            "audience_size": 51739,
            "path": [
                "Interests",
                "Additional Interests",
                "Fox Rent A Car"
            ],
            "description": null,
            "disambiguation_category": "Car Rental",
            "topic": "Travel, places and events"
        },
        {
            "id": "6003373595357",
            "name": "Private rented sector",
            "audience_size_lower_bound": 21300,
            "audience_size_upper_bound": 25058,
            "audience_size": 21300,
            "path": [
                "Interests",
                "Additional Interests",
                "Private rented sector"
            ],
            "description": null,
            "topic": "News and entertainment"
        },
        {
            "id": "6003392326683",
            "name": "The Rent House",
            "audience_size_lower_bound": 20470,
            "audience_size_upper_bound": 24082,
            "audience_size": 20470,
            "path": [
                "Interests",
                "Additional Interests",
                "The Rent House"
            ],
            "description": null,
            "topic": "Travel, places and events"
        },
        {
            "id": "6003217785076",
            "name": "Viajero Rent-A-Car",
            "audience_size_lower_bound": 10190,
            "audience_size_upper_bound": 11988,
            "audience_size": 10190,
            "path": [
                "Interests",
                "Additional Interests",
                "Viajero Rent-A-Car"
            ],
            "description": null,
            "disambiguation_category": "Car Rental",
            "topic": "Travel, places and events"
        },
        {
            "id": "6003437997825",
            "name": "E-Z Rent-A-Car",
            "audience_size_lower_bound": 2050,
            "audience_size_upper_bound": 2411,
            "audience_size": 2050,
            "path": [
                "Interests",
                "Additional Interests",
                "E-Z Rent-A-Car"
            ],
            "description": null,
            "disambiguation_category": "Car Rental",
            "topic": "Travel, places and events"
        },
        {
            "id": "6013239791243",
            "name": "Rent My Vacation Home .com",
            "audience_size_lower_bound": 800,
            "audience_size_upper_bound": 941,
            "audience_size": 800,
            "path": [
                "Interests",
                "Additional Interests",
                "Rent My Vacation Home .com"
            ],
            "description": null,
            "disambiguation_category": "Vacation Home Rental",
            "topic": "Travel, places and events"
        }
    ]
}


// Flat ---------------------------------


{
    "data": [
        {
            "id": "6003103732434",
            "name": "Apartment",
            "audience_size_lower_bound": 286316240,
            "audience_size_upper_bound": 336842635,
            "audience_size": 286316240,
            "path": [
                "Interests",
                "Additional Interests",
                "Apartment"
            ],
            "description": null,
            "topic": "Business and industry"
        },
        {
            "id": "6003051883045",
            "name": "Flat white",
            "audience_size_lower_bound": 29033640,
            "audience_size_upper_bound": 34157223,
            "audience_size": 29033640,
            "path": [
                "Interests",
                "Additional Interests",
                "Flat white"
            ],
            "description": null,
            "topic": "Food and drink"
        },
        {
            "id": "6003779200452",
            "name": "Flat panel display",
            "audience_size_lower_bound": 3299740,
            "audience_size_upper_bound": 3882047,
            "audience_size": 3299740,
            "path": [
                "Interests",
                "Additional Interests",
                "Flat panel display"
            ],
            "description": null,
            "topic": "Technology"
        },
        {
            "id": "6003258950267",
            "name": "Ballet flat",
            "audience_size_lower_bound": 2569170,
            "audience_size_upper_bound": 3022552,
            "audience_size": 2569170,
            "path": [
                "Interests",
                "Additional Interests",
                "Ballet flat"
            ],
            "description": null,
            "disambiguation_category": "Clothing (Brand)",
            "topic": "Shopping and fashion"
        },
        {
            "id": "6002840232079",
            "name": "Flat racing",
            "audience_size_lower_bound": 2554040,
            "audience_size_upper_bound": 3004752,
            "audience_size": 2554040,
            "path": [
                "Interests",
                "Additional Interests",
                "Flat racing"
            ],
            "description": null,
            "disambiguation_category": "Sport",
            "topic": "Sports and outdoors"
        },
        {
            "id": "6002984743419",
            "name": "Secondary suite",
            "audience_size_lower_bound": 2308640,
            "audience_size_upper_bound": 2716047,
            "audience_size": 2308640,
            "path": [
                "Interests",
                "Additional Interests",
                "Secondary suite"
            ],
            "description": null
        },
        {
            "id": "6002839787879",
            "name": "Dirt track racing",
            "audience_size_lower_bound": 1743690,
            "audience_size_upper_bound": 2051400,
            "audience_size": 1743690,
            "path": [
                "Interests",
                "Additional Interests",
                "Dirt track racing"
            ],
            "description": null,
            "disambiguation_category": "Sport",
            "topic": "Sports and outdoors"
        },
        {
            "id": "6003508450042",
            "name": "Council house",
            "audience_size_lower_bound": 1105300,
            "audience_size_upper_bound": 1300352,
            "audience_size": 1105300,
            "path": [
                "Interests",
                "Additional Interests",
                "Council house"
            ],
            "description": null,
            "topic": "News and entertainment"
        },
        {
            "id": "6003288311751",
            "name": "Run-flat tire",
            "audience_size_lower_bound": 1027710,
            "audience_size_upper_bound": 1209070,
            "audience_size": 1027710,
            "path": [
                "Interests",
                "Additional Interests",
                "Run-flat tire"
            ],
            "description": null,
            "disambiguation_category": "Local Business",
            "topic": "Hobbies and activities"
        },
        {
            "id": "6003285474141",
            "name": "FlatOut",
            "audience_size_lower_bound": 558210,
            "audience_size_upper_bound": 656717,
            "audience_size": 558210,
            "path": [
                "Interests",
                "Additional Interests",
                "FlatOut"
            ],
            "description": null,
            "topic": "News and entertainment"
        },
        {
            "id": "6003753263891",
            "name": "Flat roof",
            "audience_size_lower_bound": 548190,
            "audience_size_upper_bound": 644929,
            "audience_size": 548190,
            "path": [
                "Interests",
                "Additional Interests",
                "Flat roof"
            ],
            "description": null,
            "disambiguation_category": "Local Business"
        },
        {
            "id": "6004114643989",
            "name": "Tijuana Flats",
            "audience_size_lower_bound": 153170,
            "audience_size_upper_bound": 180200,
            "audience_size": 153170,
            "path": [
                "Interests",
                "Additional Interests",
                "Tijuana Flats"
            ],
            "description": null,
            "disambiguation_category": "Local Business",
            "topic": "Food and drink"
        },
        {
            "id": "6003357945995",
            "name": "The Flats",
            "audience_size_lower_bound": 117190,
            "audience_size_upper_bound": 137870,
            "audience_size": 117190,
            "path": [
                "Interests",
                "Additional Interests",
                "The Flats"
            ],
            "description": null,
            "disambiguation_category": "Neighborhood",
            "topic": "Travel, places and events"
        },
        {
            "id": "6004651472341",
            "name": "9flats",
            "audience_size_lower_bound": 68680,
            "audience_size_upper_bound": 80800,
            "audience_size": 68680,
            "path": [
                "Interests",
                "Additional Interests",
                "9flats"
            ],
            "description": null,
            "topic": "Business and industry"
        },
        {
            "id": "6017116729951",
            "name": "Flat Tummy Tea",
            "audience_size_lower_bound": 48820,
            "audience_size_upper_bound": 57435,
            "audience_size": 48820,
            "path": [
                "Interests",
                "Additional Interests",
                "Flat Tummy Tea"
            ],
            "description": null,
            "disambiguation_category": "Health/Beauty"
        },
        {
            "id": "6003364722060",
            "name": "Habitat Flats",
            "audience_size_lower_bound": 45920,
            "audience_size_upper_bound": 54023,
            "audience_size": 45920,
            "path": [
                "Interests",
                "Additional Interests",
                "Habitat Flats"
            ],
            "description": null,
            "disambiguation_category": "Local Business",
            "topic": "Travel, places and events"
        },
        {
            "id": "6006701509418",
            "name": "Racing flat",
            "audience_size_lower_bound": 34530,
            "audience_size_upper_bound": 40623,
            "audience_size": 34530,
            "path": [
                "Interests",
                "Additional Interests",
                "Racing flat"
            ],
            "description": null,
            "topic": "Shopping and fashion"
        },
        {
            "id": "6003164275655",
            "name": "Soprano clarinet",
            "audience_size_lower_bound": 33210,
            "audience_size_upper_bound": 39070,
            "audience_size": 33210,
            "path": [
                "Interests",
                "Additional Interests",
                "Soprano clarinet"
            ],
            "description": null,
            "topic": "News and entertainment"
        },
        {
            "id": "6003397838603",
            "name": "Flat-Coated Retriever",
            "audience_size_lower_bound": 28970,
            "audience_size_upper_bound": 34082,
            "audience_size": 28970,
            "path": [
                "Interests",
                "Additional Interests",
                "Flat-Coated Retriever"
            ],
            "description": null,
            "topic": "Hobbies and activities"
        },
        {
            "id": "6014823840706",
            "name": "9flats.com",
            "audience_size_lower_bound": 3650,
            "audience_size_upper_bound": 4294,
            "audience_size": 3650,
            "path": [
                "Interests",
                "Additional Interests",
                "9flats.com"
            ],
            "description": null,
            "disambiguation_category": "Travel Company",
            "topic": "Travel, places and events"
        },
        {
            "id": "6004013109009",
            "name": "Granny Flat",
            "audience_size_lower_bound": 840,
            "audience_size_upper_bound": 988,
            "audience_size": 840,
            "path": [
                "Interests",
                "Additional Interests",
                "Granny Flat"
            ],
            "description": null,
            "disambiguation_category": "Musician/Band",
            "topic": "News and entertainment"
        }
    ]
}


// Rent.com

{
    "data": [
        {
            "id": "6003249974776",
            "name": "Rent.com",
            "audience_size_lower_bound": 3477986,
            "audience_size_upper_bound": 4091748,
            "audience_size": 3477986,
            "path": [
                "Interests",
                "Additional Interests",
                "Rent.com"
            ],
            "description": null,
            "disambiguation_category": "Website",
            "topic": "Business and industry"
        },
        {
            "id": "6003745590304",
            "name": "ForRent.com",
            "audience_size_lower_bound": 449880,
            "audience_size_upper_bound": 529270,
            "audience_size": 449880,
            "path": [
                "Interests",
                "Additional Interests",
                "ForRent.com"
            ],
            "description": null,
            "disambiguation_category": "Real Estate Service",
            "topic": "Business and industry"
        },
        {
            "id": "6013239791243",
            "name": "Rent My Vacation Home .com",
            "audience_size_lower_bound": 800,
            "audience_size_upper_bound": 941,
            "audience_size": 800,
            "path": [
                "Interests",
                "Additional Interests",
                "Rent My Vacation Home .com"
            ],
            "description": null,
            "disambiguation_category": "Vacation Home Rental",
            "topic": "Travel, places and events"
        }
    ]
}


// Renters insurance

{
    "data": [
        {
            "id": "6009875271684",
            "name": "Renters' insurance",
            "audience_size_lower_bound": 2040930,
            "audience_size_upper_bound": 2401094,
            "audience_size": 2040930,
            "path": [
                "Interests",
                "Additional Interests",
                "Renters' insurance"
            ],
            "description": null,
            "topic": "Lifestyle and culture"
        }
    ]
}

// Mortgage 

{
    "data": [
        {
            "id": "6003141785766",
            "name": "Mortgage loans",
            "audience_size_lower_bound": 169568320,
            "audience_size_upper_bound": 199492141,
            "audience_size": 169568320,
            "path": [
                "Interests",
                "Business and industry",
                "Personal finance",
                "Mortgage loans"
            ],
            "description": "",
            "topic": "Business and industry"
        },
        {
            "id": "6003215620345",
            "name": "Financial adviser",
            "audience_size_lower_bound": 15877960,
            "audience_size_upper_bound": 18679952,
            "audience_size": 15877960,
            "path": [
                "Interests",
                "Additional Interests",
                "Financial adviser"
            ],
            "description": null,
            "topic": "Business and industry"
        },
        {
            "id": "6003125958988",
            "name": "Commercial mortgage",
            "audience_size_lower_bound": 6694371,
            "audience_size_upper_bound": 7875730,
            "audience_size": 6694371,
            "path": [
                "Interests",
                "Additional Interests",
                "Commercial mortgage"
            ],
            "description": null,
            "disambiguation_category": "Local Business"
        },
        {
            "id": "6003288338951",
            "name": "Mortgage law",
            "audience_size_lower_bound": 5732085,
            "audience_size_upper_bound": 6743629,
            "audience_size": 5732085,
            "path": [
                "Interests",
                "Additional Interests",
                "Mortgage law"
            ],
            "description": null,
            "topic": "Business and industry"
        },
        {
            "id": "6003401396747",
            "name": "Mortgage broker",
            "audience_size_lower_bound": 4629680,
            "audience_size_upper_bound": 5446682,
            "audience_size": 4629680,
            "path": [
                "Interests",
                "Additional Interests",
                "Mortgage broker"
            ],
            "description": null,
            "disambiguation_category": "Work Position",
            "topic": "Business and industry"
        },
        {
            "id": "6003056397985",
            "name": "Mortgage calculator",
            "audience_size_lower_bound": 3675697,
            "audience_size_upper_bound": 4324349,
            "audience_size": 3675697,
            "path": [
                "Interests",
                "Additional Interests",
                "Mortgage calculator"
            ],
            "description": null,
            "disambiguation_category": "Local Business",
            "topic": "Business and industry"
        },
        {
            "id": "6003474434175",
            "name": "Freddie Mac",
            "audience_size_lower_bound": 1624670,
            "audience_size_upper_bound": 1911376,
            "audience_size": 1624670,
            "path": [
                "Interests",
                "Additional Interests",
                "Freddie Mac"
            ],
            "description": null,
            "disambiguation_category": "Local Business",
            "topic": "Business and industry"
        },
        {
            "id": "6003170331161",
            "name": "Fannie Mae",
            "audience_size_lower_bound": 1198500,
            "audience_size_upper_bound": 1410000,
            "audience_size": 1198500,
            "path": [
                "Interests",
                "Additional Interests",
                "Fannie Mae"
            ],
            "description": null,
            "disambiguation_category": "Local Business",
            "topic": "Business and industry"
        },
        {
            "id": "6003341201196",
            "name": "Mortgage bank",
            "audience_size_lower_bound": 1141175,
            "audience_size_upper_bound": 1342558,
            "audience_size": 1141175,
            "path": [
                "Interests",
                "Additional Interests",
                "Mortgage bank"
            ],
            "description": null,
            "disambiguation_category": "Work Position",
            "topic": "Business and industry"
        },
        {
            "id": "6003156131784",
            "name": "Buy to let",
            "audience_size_lower_bound": 928050,
            "audience_size_upper_bound": 1091823,
            "audience_size": 928050,
            "path": [
                "Interests",
                "Additional Interests",
                "Buy to let"
            ],
            "description": null,
            "topic": "Business and industry"
        },
        {
            "id": "6005905073274",
            "name": "Fixed-rate mortgage",
            "audience_size_lower_bound": 657320,
            "audience_size_upper_bound": 773317,
            "audience_size": 657320,
            "path": [
                "Interests",
                "Additional Interests",
                "Fixed-rate mortgage"
            ],
            "description": null,
            "topic": "Business and industry"
        },
        {
            "id": "6003325475180",
            "name": "Adjustable-rate mortgage",
            "audience_size_lower_bound": 587680,
            "audience_size_upper_bound": 691388,
            "audience_size": 587680,
            "path": [
                "Interests",
                "Additional Interests",
                "Adjustable-rate mortgage"
            ],
            "description": null,
            "topic": "Business and industry"
        },
        {
            "id": "6003644772146",
            "name": "Mortgage insurance",
            "audience_size_lower_bound": 572090,
            "audience_size_upper_bound": 673047,
            "audience_size": 572090,
            "path": [
                "Interests",
                "Additional Interests",
                "Mortgage insurance"
            ],
            "description": null,
            "disambiguation_category": "Local Business",
            "topic": "Business and industry"
        },
        {
            "id": "6003089539192",
            "name": "Reverse mortgage",
            "audience_size_lower_bound": 517900,
            "audience_size_upper_bound": 609294,
            "audience_size": 517900,
            "path": [
                "Interests",
                "Additional Interests",
                "Reverse mortgage"
            ],
            "description": null,
            "disambiguation_category": "Local Business"
        },
        {
            "id": "6003121684782",
            "name": "Lenders mortgage insurance",
            "audience_size_lower_bound": 485430,
            "audience_size_upper_bound": 571094,
            "audience_size": 485430,
            "path": [
                "Interests",
                "Additional Interests",
                "Lenders mortgage insurance"
            ],
            "description": null,
            "topic": "Business and industry"
        },
        {
            "id": "6003651357146",
            "name": "Islamic economic jurisprudence",
            "audience_size_lower_bound": 378480,
            "audience_size_upper_bound": 445270,
            "audience_size": 378480,
            "path": [
                "Interests",
                "Additional Interests",
                "Islamic economic jurisprudence"
            ],
            "description": null,
            "topic": "Business and industry"
        },
        {
            "id": "6003528963463",
            "name": "Transamerica Corporation",
            "audience_size_lower_bound": 246050,
            "audience_size_upper_bound": 289470,
            "audience_size": 246050,
            "path": [
                "Interests",
                "Additional Interests",
                "Transamerica Corporation"
            ],
            "description": null,
            "disambiguation_category": "Local Business",
            "topic": "Business and industry"
        },
        {
            "id": "6003412984977",
            "name": "Second mortgage",
            "audience_size_lower_bound": 237320,
            "audience_size_upper_bound": 279200,
            "audience_size": 237320,
            "path": [
                "Interests",
                "Additional Interests",
                "Second mortgage"
            ],
            "description": null,
            "disambiguation_category": "Local Business"
        },
        {
            "id": "6016746926863",
            "name": "Mortgage Choice",
            "audience_size_lower_bound": 123510,
            "audience_size_upper_bound": 145305,
            "audience_size": 123510,
            "path": [
                "Interests",
                "Additional Interests",
                "Mortgage Choice"
            ],
            "description": null,
            "disambiguation_category": "Loan Service",
            "topic": "Business and industry"
        },
        {
            "id": "6003124028017",
            "name": "National Mortgage News",
            "audience_size_lower_bound": 73330,
            "audience_size_upper_bound": 86270,
            "audience_size": 73330,
            "path": [
                "Interests",
                "Additional Interests",
                "National Mortgage News"
            ],
            "description": null,
            "disambiguation_category": "Media/News Company",
            "topic": "News and entertainment"
        },
        {
            "id": "6003029865607",
            "name": "Mortgage Bankers Association",
            "audience_size_lower_bound": 69180,
            "audience_size_upper_bound": 81388,
            "audience_size": 69180,
            "path": [
                "Interests",
                "Additional Interests",
                "Mortgage Bankers Association"
            ],
            "description": null,
            "disambiguation_category": "Local Business",
            "topic": "Business and industry"
        },
        {
            "id": "6004050795296",
            "name": "The Mortgage Marketing Animals",
            "audience_size_lower_bound": 35940,
            "audience_size_upper_bound": 42282,
            "audience_size": 35940,
            "path": [
                "Interests",
                "Additional Interests",
                "The Mortgage Marketing Animals"
            ],
            "description": null,
            "topic": "Business and industry"
        },
        {
            "id": "6003083740234",
            "name": "Firefighter Mortgages",
            "audience_size_lower_bound": 35830,
            "audience_size_upper_bound": 42152,
            "audience_size": 35830,
            "path": [
                "Interests",
                "Additional Interests",
                "Firefighter Mortgages"
            ],
            "description": null,
            "disambiguation_category": "Mortgage Brokers",
            "topic": "Business and industry"
        },
        {
            "id": "6003421567112",
            "name": "Mortgage modification",
            "audience_size_lower_bound": 16680,
            "audience_size_upper_bound": 19623,
            "audience_size": 16680,
            "path": [
                "Interests",
                "Additional Interests",
                "Mortgage modification"
            ],
            "description": null,
            "topic": "Business and industry"
        },
        {
            "id": "6003533074570",
            "name": "Mortgage Coach",
            "audience_size_lower_bound": 6380,
            "audience_size_upper_bound": 7505,
            "audience_size": 6380,
            "path": [
                "Interests",
                "Additional Interests",
                "Mortgage Coach"
            ],
            "description": null,
            "disambiguation_category": "Software",
            "topic": "Technology"
        },
        {
            "id": "6003189443334",
            "name": "Government National Mortgage Association",
            "audience_size_lower_bound": 2690,
            "audience_size_upper_bound": 3164,
            "audience_size": 2690,
            "path": [
                "Interests",
                "Additional Interests",
                "Government National Mortgage Association"
            ],
            "description": null,
            "disambiguation_category": "Local Business",
            "topic": "Business and industry"
        },
        {
            "id": "6004166713208",
            "name": "Home Affordable Refinance Program",
            "audience_size_lower_bound": 620,
            "audience_size_upper_bound": 729,
            "audience_size": 620,
            "path": [
                "Interests",
                "Additional Interests",
                "Home Affordable Refinance Program"
            ],
            "description": null
        }
    ]
}
