var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "syllabus",
  "level": "1",
  "url": "syllabus.html",
  "type": "Section",
  "number": "",
  "title": "Syllabus",
  "body": " Syllabus        Course Information  This is the syllabus for Calculus I (MATH 101, section A) for Spring 2026. It is a [n] credit course.    Instructor  Prof. Lastname, Office Location, prof.lastname@example.edu .    Student Hours  TBD    Class meets  course times and location.    Course Description  course description from catalog    Prerequisite  list of prerequisites    Textbook and course materials   textbook name by textbook author.       Course Overview        Assessments and Grades     "
},
{
  "id": "sec-course-info-2",
  "level": "2",
  "url": "syllabus.html#sec-course-info-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Calculus I (MATH 101, section A) "
},
{
  "id": "notes-week-01",
  "level": "1",
  "url": "notes-week-01.html",
  "type": "Section",
  "number": "",
  "title": "Week 1",
  "body": " Week 1   This is an outline of the topics we covered in the first week of class.     Monday 8\/22      Wednesday 8\/24      Friday 8\/26     "
},
{
  "id": "notes-week-02",
  "level": "1",
  "url": "notes-week-02.html",
  "type": "Section",
  "number": "",
  "title": "Week 2",
  "body": " Week 2   Monday      Wednesday      Friday     "
},
{
  "id": "activity-01-intro-activity",
  "level": "1",
  "url": "activity-01-intro-activity.html",
  "type": "Worksheet",
  "number": "",
  "title": "Algebra Review",
  "body": " Algebra Review    This is to remind you of some algebra.      Use the quadratic formula to find the roots of       Rewrite as just one fraction: .      Here is a table showing the values of a function , along with values of its derivative .           0  1  2          0  2  2       1  0         Let . Find .       A simple TikZ picture      "
},
{
  "id": "activity-01-intro-activity-3",
  "level": "2",
  "url": "activity-01-intro-activity.html#activity-01-intro-activity-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Use the quadratic formula to find the roots of    "
},
{
  "id": "activity-01-intro-activity-4",
  "level": "2",
  "url": "activity-01-intro-activity.html#activity-01-intro-activity-4",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Rewrite as just one fraction: .   "
},
{
  "id": "activity-01-intro-activity-5",
  "level": "2",
  "url": "activity-01-intro-activity.html#activity-01-intro-activity-5",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Here is a table showing the values of a function , along with values of its derivative .           0  1  2          0  2  2       1  0         Let . Find .   "
},
{
  "id": "activity-01-intro-activity-6",
  "level": "2",
  "url": "activity-01-intro-activity.html#activity-01-intro-activity-6",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "   A simple TikZ picture     "
},
{
  "id": "handouts",
  "level": "1",
  "url": "handouts.html",
  "type": "Chapter",
  "number": "",
  "title": "Handouts",
  "body": " Handouts    "
},
{
  "id": "homework",
  "level": "1",
  "url": "homework.html",
  "type": "Chapter",
  "number": "",
  "title": "Homework",
  "body": " Homework    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
