export default [
    { Sequence: 1,
        FromStage : 'ApplicationSubmission',
        ToStage : 'HR-Review',
        Assignee : 'Ashok',
        Manager : 'Jana',
        DueDate: '2018-07-10'
 },
{ Sequence: 2,
        FromStage : 'HR-Review',
        ToStage : 'Tech-Round-1',
        Assignee : 'Developer',
        Manager : 'Jana',
        DueDate: '2018-07-12'
 },
    { Sequence: 3,
        FromStage : 'Tech-Round-1',
        ToStage : 'Tech-Round-2',
        Assignee : 'Lead',
        Manager : 'Jana',
        DueDate: '2018-07-14'
 },
    { Sequence: 4,
        FromStage : 'Tech-Round-2',
        ToStage : 'MangerDiscussion',
        Assignee : 'Manager',
        Manager : 'Jana',
        DueDate: '2018-07-15'
 },{ Sequence: 4,
        FromStage : 'MangerDiscussion',
        ToStage : 'HR&OfferRelease',
        Assignee : 'HR',
        Manager : 'Jana',
        DueDate: '2018-07-17'
 }
]