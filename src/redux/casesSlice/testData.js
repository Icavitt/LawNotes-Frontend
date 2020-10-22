export default [
    {
        id: '908243hjv98vfrt',
        caseNumber: 123541234,
        opposingParty: "diy enthusiast",
        client: "some Hoa",
        issue: "illegal renovation",
        dateCreated: "1991-12-30",
        notes: [
            {
                dateCreated: "2020-10-18",
                dateEdited: "2020-10-19",
                note: "got information emailed to me"
            },
            {
                dateCreated: "2020-10-11",
                dateEdited: null,
                notes: "idk it's a note"
            }
        ],
        actionHistory: [
            {
                action: "Sent to Shayla",
                actionCreated: "2020-10-18T00:00:00Z",
            },
            {
                action: "received case",
                actionCreated: "2020-10-11T00:00:00Z",
            },
        ],
        workLog: [
            {
                startTime: "2020-10-13T15:02:00Z",
                endTime: "2020-10-13T17:31:12Z",
                log: "search for relevant case law"
            },
            {
                startTime: "2020-10-11T08:02:00Z",
                endTime: "2020-10-11T11:31:12Z",
                log: "received case and began initial research"
            }
        ],
        deadlines: [
            {
                dueDate: "2020-10-31T08:00:00Z",
                description: "gotta file discovery"
            }
        ]
    },
    {
        id: '9hv98afg4srgh4',
        caseNumber: 132541313,
        client: "other Hoa",
        opposingParty: "the car",
        issue: "resi hit by car",
        dateCreated: "09-30-2020",
        notes: [
            {
                dateCreated: "2020-10-14",
                dateEdited: "2020-10-15",
                note: "got information emailed to me"
            },
            {
                dateCreated: "2020-10-10",
                dateEdited: null,
                notes: "saw resident get hit by car in viral video"
            }
        ],
        actionHistory: [
            {
                action: "received case",
                actionCreated: "2020-09-30T00:00:00Z",
            },
            {
                action: "Scheduled meeting with insurance",
                actionCreated: "2020-10-16T00:00:00Z",
            },

        ],
        workLog: [
            {
                startTime: "2020-10-13T15:02:00Z",
                endTime: "2020-10-13T17:31:12Z",
                log: "search for relevant case law"
            },
            {
                startTime: "2020-09-30T08:02:00Z",
                endTime: "2020-09-30T11:31:12Z",
                log: "received case and began initial research"
            }
        ],
        deadlines: [
            {
                dueDate: "2020-10-31T08:00:00Z",
                description: "gotta file discovery"
            },
            {
                dueDate: "2021-10-31T08:00:00Z",
                description: "court"
            }
        ]
    }
]