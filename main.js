var moduleStat = (function (){

	var data = [
		{
			/* group */
			groupName: "A",
			students: [
				{
					studentName: "Lida",
					marks: [
						{
							mark: 5,
							subject: "phisics",
							date: "1 / Sept"
						}, 

						{
							mark: 7,
							subject: "html",
							date: "5 / Sept"
						},

						{
							mark: 5,
							subject: "maths",
							date: "1 / Sept"
						}, 

						{
							mark: 7,
							subject: "js",
							date: "5 / Sept"
						},

						{
							mark: 10,
							subject: "css",
							date: "10 / Sept"
						}
					]
				},

				{
					studentName: "Lyuda",
					marks: [
						{
							mark: 10,
							subject: "phisics",
							date: "1 / Sept"
						}, 

						{
							mark: 8,
							subject: "js",
							date: "5 / Sept"
						},

						{
							mark: 9,
							subject: "maths",
							date: "1 / Sept"
						}, 

						{
							mark: 7,
							subject: "css",
							date: "5 / Sept"
						},

						{
							mark: 8,
							subject: "html",
							date: "10 / Sept"
						}
					]
				},
				{
					studentName: "Vitya",
					marks: [
						{
							mark: 10,
							subject: "phisics",
							date: "1 / Sept"
						}, 

						{
							mark: 10,
							subject: "js",
							date: "10 / Sept"
						},

						{
							mark: 9,
							subject: "maths",
							date: "1 / Sept"
						}, 

						{
							mark: 7,
							subject: "css",
							date: "5 / Sept"
						},

						{
							mark: 8,
							subject: "html",
							date: "10 / Sept"
						}
					]
				},
				{
					studentName: "Petya",
					marks: [
						{
							mark: 10,
							subject: "phisics",
							date: "1 / Sept"
						}, 

						{
							mark: 10,
							subject: "js",
							date: "10 / Sept"
						},

						{
							mark: 9,
							subject: "maths",
							date: "1 / Sept"
						}, 

						{
							mark: 7,
							subject: "css",
							date: "5 / Sept"
						},

						{
							mark: 8,
							subject: "html",
							date: "10 / Sept"
						}
					]
				},
				{
					studentName: "Tolya",
					marks: [
						{
							mark: 10,
							subject: "phisics",
							date: "1 / Sept"
						}, 

						{
							mark: 10,
							subject: "css",
							date: "10 / Sept"
						},

						{
							mark: 9,
							subject: "maths",
							date: "1 / Sept"
						}, 

						{
							mark: 7,
							subject: "html",
							date: "5 / Sept"
						},

						{
							mark: 8,
							subject: "js",
							date: "10 / Sept"
						}
					]
				},
				{
					studentName: "AndriyH",
					marks: [
						{
							mark: 10,
							subject: "phisics",
							date: "1 / Sept"
						}, 

						{
							mark: 10,
							subject: "js",
							date: "10 / Sept"
						},

						{
							mark: 9,
							subject: "maths",
							date: "1 / Sept"
						}, 

						{
							mark: 7,
							subject: "html",
							date: "5 / Sept"
						},

						{
							mark: 8,
							subject: "css",
							date: "10 / Sept"
						}
					]
				},
				{
					studentName: "AndriyD",
					marks: [
						{
							mark: 10,
							subject: "phisics",
							date: "1 / Sept"
						}, 

						{
							mark: 10,
							subject: "js",
							date: "10 / Sept"
						},

						{
							mark: 9,
							subject: "maths",
							date: "1 / Sept"
						}, 

						{
							mark: 7,
							subject: "css",
							date: "5 / Sept"
						},

						{
							mark: 8,
							subject: "html",
							date: "10 / Sept"
						}
					]
				},
				{
					studentName: "AndriyK",
					marks: [
						{
							mark: 8,
							subject: "css",
							date: "5 / Sept"
						},

						{
							mark: 10,
							subject: "phisics",
							date: "10 / Sept"
						},

						{
							mark: 9,
							subject: "maths",
							date: "1 / Sept"
						}, 

						{
							mark: 7,
							subject: "js",
							date: "5 / Sept"
						},

						{
							mark: 8,
							subject: "html",
							date: "10 / Sept"
						}
					]
				},
				{
					studentName: "AndriyG",
					marks: [
						{
							mark: 10,
							subject: "phisics",
							date: "1 / Sept"
						}, 


						{
							mark: 10,
							subject: "js",
							date: "10 / Sept"
						},

						{
							mark: 9,
							subject: "maths",
							date: "1 / Sept"
						}, 

						{
							mark: 7,
							subject: "html",
							date: "5 / Sept"
						},

						{
							mark: 8,
							subject: "css",
							date: "10 / Sept"
						}
					]
				},
				{
					studentName: "Borya",
					marks: [
						{
							mark: 10,
							subject: "phisics",
							date: "1 / Sept"
						}, 

						{
							mark: 10,
							subject: "css",
							date: "10 / Sept"
						},

						{
							mark: 9,
							subject: "maths",
							date: "1 / Sept"
						}, 

						{
							mark: 7,
							subject: "html",
							date: "5 / Sept"
						},

						{
							mark: 8,
							subject: "js",
							date: "10 / Sept"
						}
					]
				}
			] 
		},

		{
			/* group B */
			groupName: "B",
			students: [
				{
					studentName: "Bill",
					marks: [
						{
							mark: 8,
							subject: "phisics",
							date: "1 / Sept"
						}, 


						{
							mark: 10,
							subject: "js",
							date: "10 / Sept"
						},

						{
							mark: 9,
							subject: "maths",
							date: "1 / Sept"
						}, 

						{
							mark: 10,
							subject: "css",
							date: "5 / Sept"
						},

						{
							mark: 12,
							subject: "html",
							date: "10 / Sept"
						}
					]
				},
				{
					studentName: "Steve",
					marks: [
						{
							mark: 8,
							subject: "phisics",
							date: "1 / Sept"
						}, 

						{
							mark: 10,
							subject: "js",
							date: "10 / Sept"
						},

						{
							mark: 9,
							subject: "maths",
							date: "1 / Sept"
						}, 

						{
							mark: 10,
							subject: "css",
							date: "5 / Sept"
						},

						{
							mark: 12,
							subject: "html",
							date: "10 / Sept"
						}
					]
				},
				{
					studentName: "Sergey",
					marks: [
						{
							mark: 8,
							subject: "phisics",
							date: "1 / Sept"
						}, 

						{
							mark: 10,
							subject: "html",
							date: "10 / Sept"
						},

						{
							mark: 9,
							subject: "maths",
							date: "1 / Sept"
						}, 

						{
							mark: 10,
							subject: "css",
							date: "5 / Sept"
						},

						{
							mark: 12,
							subject: "js",
							date: "10 / Sept"
						}
					]
				},
				{
					studentName: "Lary",
					marks: [
						{
							mark: 8,
							subject: "phisics",
							date: "1 / Sept"
						}, 

						{
							mark: 10,
							subject: "js",
							date: "5 / Sept"
						},

						{
							mark: 9,
							subject: "maths",
							date: "1 / Sept"
						}, 

						{
							mark: 10,
							subject: "html",
							date: "5 / Sept"
						},

						{
							mark: 12,
							subject: "css",
							date: "10 / Sept"
						}
					]
				},
				{
					studentName: "Linus",
					marks: [
						{
							mark: 8,
							subject: "phisics",
							date: "1 / Sept"
						}, 

						{
							mark: 10,
							subject: "js",
							date: "10 / Sept"
						},

						{
							mark: 9,
							subject: "maths",
							date: "1 / Sept"
						}, 

						{
							mark: 10,
							subject: "css",
							date: "5 / Sept"
						},

						{
							mark: 12,
							subject: "html",
							date: "10 / Sept"
						}
					]
				},
				{
					studentName: "Mark",
					marks: [
						{
							mark: 8,
							subject: "phisics",
							date: "1 / Sept"
						}, 


						{
							mark: 10,
							subject: "js",
							date: "10 / Sept"
						},

						{
							mark: 9,
							subject: "maths",
							date: "1 / Sept"
						}, 

						{
							mark: 10,
							subject: "css",
							date: "5 / Sept"
						},

						{
							mark: 12,
							subject: "html",
							date: "10 / Sept"
						}
					]
				},
				{
					studentName: "Kevin",
					marks: [
						{
							mark: 8,
							subject: "phisics",
							date: "1 / Sept"
						}, 

						{
							mark: 10,
							subject: "css",
							date: "10 / Sept"
						},

						{
							mark: 9,
							subject: "maths",
							date: "1 / Sept"
						}, 

						{
							mark: 10,
							subject: "html",
							date: "5 / Sept"
						},

						{
							mark: 12,
							subject: "js",
							date: "10 / Sept"
						}
					]
				},
				{
					studentName: "RMC",
					marks: [
						{
							mark: 8,
							subject: "phisics",
							date: "1 / Sept"
						}, 

						{
							mark: 10,
							subject: "js",
							date: "10 / Sept"
						},

						{
							mark: 9,
							subject: "maths",
							date: "1 / Sept"
						}, 

						{
							mark: 10,
							subject: "html",
							date: "5 / Sept"
						},

						{
							mark: 12,
							subject: "css",
							date: "10 / Sept"
						}
					]
				},
				{
					studentName: "Kate",
					marks: [
						{
							mark: 8,
							subject: "phisics",
							date: "1 / Sept"
						}, 

						{
							mark: 10,
							subject: "js",
							date: "10 / Sept"
						},

						{
							mark: 9,
							subject: "maths",
							date: "1 / Sept"
						}, 

						{
							mark: 10,
							subject: "html",
							date: "5 / Sept"
						},

						{
							mark: 12,
							subject: "js",
							date: "10 / Sept"
						}
					]
				},

				{
					studentName: "Olivia",
					marks: [
						{
							mark: 12,
							subject: "phisics",
							date: "1 / Sept"
						}, 


						{
							mark: 10,
							subject: "js",
							date: "10 / Sept"
						},

						{
							mark: 9,
							subject: "maths",
							date: "1 / Sept"
						}, 

						{
							mark: 10,
							subject: "css",
							date: "5 / Sept"
						},

						{
							mark: 8,
							subject: "html",
							date: "10 / Sept"
						}
					]
				}
			] 
		},
		{
			/* group */
			groupName: "C",
			students: [
				{
					studentName: "Alexander",
					marks: [
						{
							mark: 5,
							subject: "html",
							date: "1 / Sept"
						}, 

						{
							mark: 7,
							subject: "phisics",
							date: "5 / Sept"
						},

						{
							mark: 10,
							subject: "css",
							date: "10 / Sept"
						},

						{
							mark: 7,
							subject: "js",
							date: "5 / Sept"
						},

						{
							mark: 10,
							subject: "maths",
							date: "10 / Sept"
						}
					]
				},
				{
					studentName: "Caesar",
					marks: [
						{
							mark: 5,
							subject: "phisics",
							date: "1 / Sept"
						}, 

						{
							mark: 7,
							subject: "js",
							date: "5 / Sept"
						},

						{
							mark: 5,
							subject: "maths",
							date: "1 / Sept"
						}, 

						{
							mark: 7,
							subject: "css",
							date: "5 / Sept"
						},

						{
							mark: 10,
							subject: "html",
							date: "10 / Sept"
						}
					]
				},
				{
					studentName: "Ramses",
					marks: [
						{
							mark: 5,
							subject: "phisics",
							date: "1 / Sept"
						}, 

						{
							mark: 10,
							subject: "css",
							date: "10 / Sept"
						},

						{
							mark: 5,
							subject: "maths",
							date: "1 / Sept"
						}, 

						{
							mark: 7,
							subject: "js",
							date: "5 / Sept"
						},

						{
							mark: 10,
							subject: "html",
							date: "10 / Sept"
						}
					]
				},
				{
					studentName: "Hamurappy",
					marks: [
						{
							mark: 5,
							subject: "phisics",
							date: "1 / Sept"
						}, 

						{
							mark: 7,
							subject: "js",
							date: "5 / Sept"
						},

						{
							mark: 5,
							subject: "html",
							date: "1 / Sept"
						}, 

						{
							mark: 7,
							subject: "css",
							date: "5 / Sept"
						},

						{
							mark: 10,
							subject: "maths",
							date: "10 / Sept"
						}
					]
				},
				{
					studentName: "Xerx",
					marks: [
						{
							mark: 5,
							subject: "phisics",
							date: "1 / Sept"
						}, 

						{
							mark: 7,
							subject: "js",
							date: "5 / Sept"
						},

						{
							mark: 10,
							subject: "css",
							date: "10 / Sept"
						},

						{
							mark: 5,
							subject: "html",
							date: "1 / Sept"
						}, 

						{
							mark: 10,
							subject: "maths",
							date: "10 / Sept"
						}
					]
				},
				{
					studentName: "Atilla",
					marks: [
						{
							mark: 5,
							subject: "css",
							date: "1 / Sept"
						}, 

						{
							mark: 7,
							subject: "phisics",
							date: "5 / Sept"
						},

						{
							mark: 5,
							subject: "maths",
							date: "1 / Sept"
						}, 

						{
							mark: 7,
							subject: "js",
							date: "5 / Sept"
						},

						{
							mark: 10,
							subject: "html",
							date: "10 / Sept"
						}
					]
				},
				{
					studentName: "Napoleon",
					marks: [
						{
							mark: 5,
							subject: "phisics",
							date: "1 / Sept"
						}, 

						{
							mark: 7,
							subject: "js",
							date: "5 / Sept"
						},

						{
							mark: 5,
							subject: "maths",
							date: "1 / Sept"
						}, 

						{
							mark: 7,
							subject: "css",
							date: "5 / Sept"
						},

						{
							mark: 10,
							subject: "html",
							date: "10 / Sept"
						}
					]
				},
				{
					studentName: "Joanna",
					marks: [
						{
							mark: 5,
							subject: "css",
							date: "1 / Sept"
						}, 

						{
							mark: 7,
							subject: "phisics",
							date: "5 / Sept"
						},

						{
							mark: 10,
							subject: "html",
							date: "10 / Sept"
						},

						{
							mark: 5,
							subject: "maths",
							date: "1 / Sept"
						}, 

						{
							mark: 10,
							subject: "js",
							date: "10 / Sept"
						}
					]
				},
				{
					studentName: "John",
					marks: [
						{
							mark: 5,
							subject: "phisics",
							date: "1 / Sept"
						}, 

						{
							mark: 7,
							subject: "js",
							date: "5 / Sept"
						},

						{
							mark: 5,
							subject: "css",
							date: "1 / Sept"
						}, 

						{
							mark: 7,
							subject: "maths",
							date: "5 / Sept"
						},

						{
							mark: 10,
							subject: "js",
							date: "10 / Sept"
						}
					]
				},

				{
					studentName: "Michael",
					marks: [
						{
							mark: 10,
							subject: "js",
							date: "1 / Sept"
						}, 

						{
							mark: 8,
							subject: "phisics",
							date: "5 / Sept"
						},

						{
							mark: 10,
							subject: "css",
							date: "10 / Sept"
						},

						{
							mark: 7,
							subject: "html",
							date: "5 / Sept"
						},

						{
							mark: 8,
							subject: "maths",
							date: "10 / Sept"
						}
					]
				}
			] 
		},
	];
	var countAvgMarkGroup = function(groupName, subject) {
		var result = null;
		var group = null;
		for(var i = 0; i < data.length; ++i) {
			if (data[i].groupName == groupName) {
				group = data[i];
				break;
			}
		}
		if (!group) {
			return result;
		}

		var marks = [];

		for(var j = 0; j < group.students.length; ++j) {
			for (var i = 0; i < group.students[j].marks.length; ++i){
				if (group.students[j].marks[i].subject == subject) {
					marks.push(group.students[j].marks[i]);
				}
			}
		}

		if (!marks) {
			return result;
		}

		var sumAvg = 0;

		for (var i = 0; i < marks.length; ++i) {
			sumAvg += marks[i].mark;
		}

		result = sumAvg / marks.length;

		console.log (result);
		return result;
	};

	var countAvgMarkGroup = function(groupName, subject) {
		var result = null;
		var group = null;
		for(var i = 0; i < data.length; ++i) {
			if (data[i].groupName == groupName) {
				group = data[i];
				break;
			}
		}
		if (!group) {
			return result;
		}

		var marks = [];

		for(var j = 0; j < group.students.length; ++j) {
			for (var i = 0; i < group.students[j].marks.length; ++i){
				if (group.students[j].marks[i].subject == subject) {
					marks.push(group.students[j].marks[i]);
				}
			}
		}

		if (!marks) {
			return result;
		}

		var sumAvg = 0;

		for (var i = 0; i < marks.length; ++i) {
			sumAvg += marks[i].mark;
		}

		result = sumAvg / marks.length;

		console.log (result);
		return result;
	};

	//countAvgMarkGroup("B", "phisics");

	var countAvgMarkStudent = function(studentName) {
	var result = null;
	var student = null;

	for(var i = 0; i < data.length; ++i) {
		for (var j = 0; j < data[i].students.length; ++j) {
			if (data[i].students[j].studentName == studentName) {
				student = data[i].students[j];
				break;
			}
		}
	}

	if (!student) {
		return result;
	}

	var sumAvg = 0
	for (var k = 0; k < student.marks.length; ++k) {
		sumAvg += student.marks[k].mark;
	}

	resultStud = sumAvg / student.marks.length;

	console.log (resultStud);
	return resultStud;
	};

	//countAvgMarkStudent("Lida");
	return {
		countAvgMarkStudent: countAvgMarkStudent,
		countAvgMarkGroup: countAvgMarkGroup
	}
})();
function search(){
	var student = $("#student").val();
	var group = $("#group").val();
	
	var res = [];
	
	if(student){
		res = moduleStat.countAvgMarkStudent(student);
	}
	if(group){
		res = moduleStat.countAvgMarkGroup(group);
	}
	var resultText = "";
		for (var i = 0; i < res.length; ++i) {
			resultText +=  res[i].student + res[i].group ;
		}
		
		$("#result").html('<table border="1">' + resultText + '</table>');
			
};