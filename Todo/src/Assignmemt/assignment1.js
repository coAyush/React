Form{{uid}} = {
	uid:{{uid}},
	allEmployeesData:[],
		isEdit : false,
			editIndex: -1,
				setUploadFileName : function(existingFileName){
					if(existingFileName){
						$('#fileUpload').next('.custom-file-label').addClass("selected").html(existingFileName);
					}
				},
					documentLoad : function(handlebarFragments){
						console.log("documentLoad is called")
						var ref = Form{{uid}};
						console.log("form id is ",ref.uid)
						ref.bindActions(); 
					},

						populateData : function(data, handlebarFragments){
							var ref = Form{{uid}};
							console.log("Process ID =", data.processInstanceId);
							console.log("Task ID =", data.taskId);
							ref.allEmployeesData=data.allEmployeesData; //added
							ref.renderTable();

							if(data){

								$("#addBtn").html(
									'<i class="bi bi-pencil"></i> Update Applicant'
								);

								// optional
								$("#addBtn").removeClass("btn-primary");
								$("#addBtn").addClass("btn-warning");
							}
							console.log("Populate data called");
							console.log("Incomming data is ",data)
						},
							extractData : function(){
								var ref = Form{{uid}};

								console.log("Sending to server:");
								console.log(ref.allEmployeesData);

								return {
									allEmployeesData: ref.allEmployeesData
								};

							},
								bindActions : function(){

									var ref = Form{{uid}};

									$("#addBtn").off("click").on("click", function(){

										if(!ref.validateForm()){
											return;
										}

										const employee = {

											personalDetails: {
												firstName: $("#fname").val(),
												middleName: $("#mname").val(),
												lastName: $("#lname").val(),

												address: $("#address").val(),
												houseNo: $("#houseNo").val(),
												street: $("#street").val(),
												city: $("#city").val(),
												district: $("#district").val(),
												state: $("#state").val(),
												pincode: $("#pincode").val(),

												mobile: $("#mobile").val(),
												age: $("#age").val(),
												gender: $("#gender").val()
											},

											officialDetails: {
												position: $("#position").val(),
												salary: $("#salary").val(),
												workingHours: $("#workingHours").val(),
												nightShift: $("#nightShift").val(),
												employmentType: $('input[name="employmentType"]:checked').val(),
												availability: $("#availability").val()
											},

											educationalDetails: {

												primary: {
													school: $("#primarySchoolName").val(),
													location: $("#primarySchoolLocation").val(),
													years: $("#primarySchoolYears").val(),
													degree: $("#primarySchoolDegree").val()
												},

												secondary: {
													school: $("#secondarySchoolName").val(),
													location: $("#secondarySchoolLocation").val(),
													years: $("#secondarySchoolYears").val(),
													degree: $("#secondarySchoolDegree").val()
												},

												higherSecondary: {
													school: $("#higherSecondarySchoolName").val(),
													location: $("#higherSecondarySchoolLocation").val(),
													years: $("#higherSecondarySchoolYears").val(),
													stream: $("#Stream").val()
												},

												bachelors: {
													college: $("#BachelorsCollegeName").val(),
													location: $("#BachelorsCollegeLocation").val(),
													years: $("#BachelorsCollegeYears").val(),
													degree: $("#bachelorsDegreeSelect").val()
												},

												masters: {
													college: $("#MastersCollegeName").val(),
													location: $("#MastersCollegeLocation").val(),
													years: $("#MastersCollegeYears").val(),
													degree: $("#mastersDegreeSelect").val()
												}

											}

										};

										if(ref.isEdit){

											ref.allEmployeesData[ref.editIndex] = employee;
											ref.isEdit = false;
											ref.editIndex = -1;

											$("#addBtn")
												.html("Add Applicant")
												.removeClass("btn-warning")
												.addClass("btn-primary");

										}else{

											ref.allEmployeesData.push(employee);

										}

										console.log(ref.allEmployeesData);

										ref.renderTable();

									});

									$(document).off("click",".remove-btn").on("click", ".remove-btn", function(){
										var isConfirm=confirm("Are you sure you want to remove this applicant?");
										if(!isConfirm){
											return;
										}
										var index = $(this).data("index");

										ref.allEmployeesData = ref.allEmployeesData.filter(function(employee, i){
											return i !== index;
										});

										ref.renderTable();

									});

									$(document).off("click",".edit-btn").on("click", ".edit-btn", function(){

										var index = $(this).data("index");

										ref.editIndex = index;
										ref.isEdit = true;

										//ref.populateData(ref.allEmployeesData[index]);
										ref.fillForm(ref.allEmployeesData[index]);

										$("#addBtn")
											.html("Update Applicant")
											.removeClass("btn-primary")
											.addClass("btn-warning");

									});
									$("#submitBtn").off("click").on("click", function(){
										console.log("submit clicked ")
										if(ref.allEmployeesData.length === 0){
											alert("Please add at least one applicant.");
											return;
										}

										console.log(ref.allEmployeesData);
										console.log(ref.isEdit);
console.log(ref.editIndex);
										FormHelper.startProcess(ref.uid);

									});

								},
									validateForm : function(){

										if(fname.value.trim() === ""){
											alert("Please enter First Name");
											return false;
										}

										if(lname.value.trim() === ""){
											alert("Please enter Last Name");
											return false;
										}

										if(address.value.trim() === ""){
											alert("Please enter Address");
											return false;
										}

										if(houseNo.value.trim() === ""){
											alert("Please enter House Number");
											return false;
										}

										if(street.value.trim() === ""){
											alert("Please enter Street");
											return false;
										}

										if(city.value.trim() === ""){
											alert("Please enter City");
											return false;
										}

										if(district.value.trim() === ""){
											alert("Please enter District");
											return false;
										}

										if(state.value.trim() === ""){
											alert("Please enter State");
											return false;
										}
										return true;

									},
										renderTable : function(){

											var ref = Form{{uid}};
											var html = "";

											ref.allEmployeesData.forEach(function(employee, index){

												html += `
<tr>
<td>${index + 1}</td>
<td>
${employee.personalDetails.firstName}
${employee.personalDetails.lastName}
</td>
<td>${employee.personalDetails.mobile}</td>
<td>${employee.officialDetails.position}</td>
<td>${employee.officialDetails.employmentType}</td>
<td>${employee.officialDetails.salary}</td>
<td>
<button
class="btn btn-warning btn-sm edit-btn"
data-index="${index}">
Edit
</button>

<button
class="btn btn-danger btn-sm remove-btn"
data-index="${index}">
Remove
</button>
</td>
</tr>
`;
											});

											$("#applicantTable").html(html);

										},
											showEmployee : function(index){

												var ref = Form{{uid}};

												var employee = ref.allEmployeesData[index];

												$("#modalBody").html(`

<div class="card mb-3">

<div class="card-header bg-warning fw-bold">
Personal Details
</div>

<div class="card-body">

<div class="row">

<div class="col-md-4">
<strong>First Name</strong><br>
${employee.personalDetails.firstName}
</div>

<div class="col-md-4">
<strong>Middle Name</strong><br>
${employee.personalDetails.middleName || "-"}
</div>

<div class="col-md-4">
<strong>Last Name</strong><br>
${employee.personalDetails.lastName}
</div>

<div class="col-md-4 mt-3">
<strong>Mobile</strong><br>
${employee.personalDetails.mobile}
</div>

<div class="col-md-4 mt-3">
<strong>Age</strong><br>
${employee.personalDetails.age}
</div>

<div class="col-md-4 mt-3">
<strong>Gender</strong><br>
${employee.personalDetails.gender}
</div>

</div>

<hr>

<strong>Address</strong>

<p class="mb-0">
${employee.personalDetails.houseNo},
${employee.personalDetails.street},
${employee.personalDetails.city},
${employee.personalDetails.district},
${employee.personalDetails.state}
-
${employee.personalDetails.pincode}
</p>

</div>

</div>

<div class="card mb-3">

<div class="card-header bg-info text-white fw-bold">
Official Details
</div>

<div class="card-body">

<div class="row">

<div class="col-md-4">
<strong>Position</strong><br>
${employee.officialDetails.position}
</div>

<div class="col-md-4">
<strong>Salary</strong><br>
₹${employee.officialDetails.salary}
</div>

<div class="col-md-4">
<strong>Working Hours</strong><br>
${employee.officialDetails.workingHours}
</div>

<div class="col-md-4 mt-3">
<strong>Night Shift</strong><br>
${employee.officialDetails.nightShift}
</div>

<div class="col-md-4 mt-3">
<strong>Employment Type</strong><br>
${employee.officialDetails.employmentType}
</div>

<div class="col-md-4 mt-3">
<strong>Availability</strong><br>
${employee.officialDetails.availability}
</div>

</div>

</div>

</div>

<div class="card">

<div class="card-header bg-success text-white fw-bold">
Educational Details
</div>

<div class="card-body">

<table class="table table-bordered">

<thead class="table-light">
<tr>
<th>Level</th>
<th>Institution</th>
<th>Location</th>
<th>Years</th>
<th>Degree</th>
</tr>
</thead>

<tbody>

<tr>
<td>Primary</td>
<td>${employee.educationalDetails.primary.school}</td>
<td>${employee.educationalDetails.primary.location}</td>
<td>${employee.educationalDetails.primary.years}</td>
<td>${employee.educationalDetails.primary.degree}</td>
</tr>

<tr>
<td>Secondary</td>
<td>${employee.educationalDetails.secondary.school}</td>
<td>${employee.educationalDetails.secondary.location}</td>
<td>${employee.educationalDetails.secondary.years}</td>
<td>${employee.educationalDetails.secondary.degree}</td>
</tr>

<tr>
<td>Higher Secondary</td>
<td>${employee.educationalDetails.higherSecondary.school}</td>
<td>${employee.educationalDetails.higherSecondary.location}</td>
<td>${employee.educationalDetails.higherSecondary.years}</td>
<td>${employee.educationalDetails.higherSecondary.stream}</td>
</tr>

<tr>
<td>Bachelor's</td>
<td>${employee.educationalDetails.bachelors.college}</td>
<td>${employee.educationalDetails.bachelors.location}</td>
<td>${employee.educationalDetails.bachelors.years}</td>
<td>${employee.educationalDetails.bachelors.degree}</td>
</tr>

<tr>
<td>Master's</td>
<td>${employee.educationalDetails.masters.college}</td>
<td>${employee.educationalDetails.masters.location}</td>
<td>${employee.educationalDetails.masters.years}</td>
<td>${employee.educationalDetails.masters.degree}</td>
</tr>

</tbody>

</table>

</div>

</div>

`);

											},
												fillForm: function(employee){

													$("#fname").val(employee.personalDetails.firstName);
													$("#mname").val(employee.personalDetails.middleName);
													$("#lname").val(employee.personalDetails.lastName);

													$("#address").val(employee.personalDetails.address);
													$("#houseNo").val(employee.personalDetails.houseNo);
													$("#street").val(employee.personalDetails.street);
													$("#city").val(employee.personalDetails.city);
													$("#district").val(employee.personalDetails.district);
													$("#state").val(employee.personalDetails.state);
													$("#pincode").val(employee.personalDetails.pincode);

													$("#mobile").val(employee.personalDetails.mobile);
													$("#age").val(employee.personalDetails.age);
													$("#gender").val(employee.personalDetails.gender);

													$("#position").val(employee.officialDetails.position);
													$("#salary").val(employee.officialDetails.salary);
													$("#workingHours").val(employee.officialDetails.workingHours);
													$("#nightShift").val(employee.officialDetails.nightShift);
													$("#availability").val(employee.officialDetails.availability);

													$('input[name="employmentType"][value="' +
													  employee.officialDetails.employmentType +
													  '"]').prop("checked", true);

													$("#primarySchoolName").val(employee.educationalDetails.primary.school);
													$("#primarySchoolLocation").val(employee.educationalDetails.primary.location);
													$("#primarySchoolYears").val(employee.educationalDetails.primary.years);
													$("#primarySchoolDegree").val(employee.educationalDetails.primary.degree);

													$("#secondarySchoolName").val(employee.educationalDetails.secondary.school);
													$("#secondarySchoolLocation").val(employee.educationalDetails.secondary.location);
													$("#secondarySchoolYears").val(employee.educationalDetails.secondary.years);
													$("#secondarySchoolDegree").val(employee.educationalDetails.secondary.degree);

													$("#higherSecondarySchoolName").val(employee.educationalDetails.higherSecondary.school);
													$("#higherSecondarySchoolLocation").val(employee.educationalDetails.higherSecondary.location);
													$("#higherSecondarySchoolYears").val(employee.educationalDetails.higherSecondary.years);
													$("#Stream").val(employee.educationalDetails.higherSecondary.stream);

													$("#BachelorsCollegeName").val(employee.educationalDetails.bachelors.college);
													$("#BachelorsCollegeLocation").val(employee.educationalDetails.bachelors.location);
													$("#BachelorsCollegeYears").val(employee.educationalDetails.bachelors.years);
													$("#bachelorsDegreeSelect").val(employee.educationalDetails.bachelors.degree);

													$("#MastersCollegeName").val(employee.educationalDetails.masters.college);
													$("#MastersCollegeLocation").val(employee.educationalDetails.masters.location);
													$("#MastersCollegeYears").val(employee.educationalDetails.masters.years);
													$("#mastersDegreeSelect").val(employee.educationalDetails.masters.degree);

												}
};

