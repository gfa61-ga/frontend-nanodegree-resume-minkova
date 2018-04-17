$(function() {
    let model = {
        bio: {
            "name": "Tania Minkova",
            "role": "WebDeveloper",
            "welcomeMessage": "Stories of Galadriel's life.",
            "biopic": "images/ava.jpg",
            "contacts": [{
                "mobile": "555-55-55",
                "skype": "minkova.tanya",
                "location": "Kiev",
                "email": "t.minkova@live.com"
            }],
            "skills": ["Beauty", "Patience", "Honesty", "Might"]
        },

        work: {
            "jobs": [{
                    "employer": "Peter Jackson",
                    "title": "Web-developer",
                    "dates": "2013 - 2015",
                    "location": "Kiev",
                    "description": "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness."
                },
                {
                    "employer": "Astound Commerce",
                    "title": "Web-developer",
                    "dates": "2011 - 2013",
                    "location": "Paris",
                    "description": "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring. "
                }
            ]
        },

        projects: {
            "project": [{
                    "title": "The Hobbit: The Desolation of Smaug ",
                    "dates": "2013",
                    "description": "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.",
                    "images": ["images/1.jpg", "images/2.jpg"]
                },
                {
                    "title": "The Hobbit: The Battle of the Five Armies",
                    "dates": "2014",
                    "description": "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.",
                    "images": ["images/3.jpg", "images/4.jpg"]
                }
            ]
        },

        education: {
            "schools": [{
                    "name": "Donetsk State Institute of Artificial Intelligence",
                    "location": "Donetsk, Ukraine",
                    "degree": "bachelor",
                    "majors": "computer science",
                    "dates": "2001 - 2005",
                    "url": "donntu.edu.ua"
                },
                {
                    "name": "Donetsk State Institute of Artificial Intelligence",
                    "location": "Donetsk, Ukraine",
                    "degree": "master",
                    "majors": "computer science",
                    "dates": "2005 - 2006",
                    "url": "donntu.edu.ua"
                }
            ],
            "online courses": [{
                "title": "Front-End Web Developer Nanodegree",
                "school": "udacity",
                "dates": "2014 - 2015",
                "url": "https://www.udacity.com/course/nd001"
            }]
        }
    };

    let octapus = {
        init: function() {
            mapView.init();
            mainView.init();
        },

        getWork: function() {
            return model.work;
        },

        getProjects: function() {
            return model.projects;
        },

        getEducation: function() {
            return model.education;
        },

        getBio: function() {
            return model.bio;
        },

        locationFinder: function() {
            var locations = [];

            for (var contact in model.bio.contacts) {
                locations.push(model.bio.contacts[contact].location);
            }

            for (var school in model.education.schools) {
                locations.push(model.education.schools[school].location);
            }

            for (var job in model.work.jobs) {
                locations.push(model.work.jobs[job].location);
            }

            return locations;
        }
    };

    let mainView = {
        init: function() {

            var HTMLheaderName = '<h1 id="name">%data%</h1>';
            var HTMLheaderRole = '<span class="white-text">%data%</span><hr/>';

            var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
            var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
            var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
            var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
            var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
            var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
            var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

            var HTMLbioPic = '<img src="%data%" class="biopic">';
            var HTMLWelcomeMsg = '<span class="welcome-message">%data%</span>';

            var HTMLskillsStart = '<h3 id="skillsH3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
            var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

            let bioDisplay = function(bio) {
                var formattedName = HTMLheaderName.replace("%data%", bio.name);
                var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
                var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
                var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

                $("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage, formattedMessage);
                $("#header").append(HTMLskillsStart);

                for (var skill in bio.skills) {
                    var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
                    $("#skills").append(formattedSkills);
                }

                for (var contact in bio.contacts) {
                    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contact].mobile);
                    var formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact].email);
                    var formattedSkype = HTMLcontactGeneric.replace("%contact%", "skype").replace("%data%", bio.contacts[contact].skype);
                    $("#topContacts").append(formattedMobile, formattedEmail, formattedSkype);
                    $("#footerContacts").append(formattedMobile, formattedEmail, formattedSkype);
                }
            };

            var HTMLschoolStart = '<div class="education-entry"></div>';
            var HTMLschoolName = '<a href="#">%data%';
            var HTMLschoolDegree = ' -- %data%</a>';
            var HTMLschoolDates = '<div class="date-text">%data%</div>';
            var HTMLschoolLocation = '<div class="location-text">%data%</div>';
            var HTMLschoolMajor = '<em><br>Major: %data%</em>';

            var HTMLonlineClasses = '<h3>Online Classes</h3>';
            var HTMLonlineTitle = '<a href="#">%data%';
            var HTMLonlineSchool = ' - %data%</a>';
            var HTMLonlineDates = '<div class="date-text">%data%</div>';
            var HTMLonlineURL = '<br><a href="#">%data%</a>';

            let educationDisplay = function(education) {
                for (var school in education.schools) {
                    $("#education").append(HTMLschoolStart);

                    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
                    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
                    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
                    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
                    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
                    $(".education-entry:last").append(formattedName + formattedDegree, formattedDates, formattedLocation, formattedMajor);
                }

                for (education in education['online courses']) {
                    /* TODO*/
                }

            };

            var HTMLworkStart = '<div class="work-entry"></div>';
            var HTMLworkEmployer = '<a href="#">%data%';
            var HTMLworkTitle = ' - %data%</a>';
            var HTMLworkDates = '<div class="date-text">%data%</div>';
            var HTMLworkLocation = '<div class="location-text">%data%</div>';
            var HTMLworkDescription = '<p><br>%data%</p>';

            let workDisplay = function(work) {
                for (var job in work.jobs) {
                    $("#workExperience").append(HTMLworkStart);

                    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
                    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
                    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
                    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

                    $(".work-entry:last").append(formattedEmployer + formattedTitle, formattedDates, formattedDescription);
                }
            };

            var HTMLprojectStart = '<div class="project-entry"></div>';
            var HTMLprojectTitle = '<a href="#">%data%</a>';
            var HTMLprojectDates = '<div class="date-text">%data%</div>';
            var HTMLprojectDescription = '<p><br>%data%</p>';
            var HTMLprojectImage = '<img src="%data%">';

            let projectsDisplay = function(projects) {
                for (var item in projects.project) {
                    $("#projects").append(HTMLprojectStart);
                    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[item].title);
                    var formattedDates = HTMLprojectDates.replace("%data%", projects.project[item].dates);
                    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[item].description);

                    $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
                    for (var image in projects.project[item].images) {
                        var formattedImage = HTMLprojectImage.replace("%data%", projects.project[item].images[image]);
                        $(".project-entry:last").append(formattedImage);
                    }
                }
            };

            workDisplay(octapus.getWork());
            projectsDisplay(octapus.getProjects());
            educationDisplay(octapus.getEducation());
            bioDisplay(octapus.getBio());

            if (document.getElementsByClassName('flex-item').length === 0) {
                document.getElementById('topContacts').style.display = 'none';
            }
            if (document.getElementsByTagName('h1').length === 0) {
                document.getElementById('header').style.display = 'none';
            }
            if (document.getElementsByClassName('work-entry').length === 0) {
                document.getElementById('workExperience').style.display = 'none';
            }
            if (document.getElementsByClassName('project-entry').length === 0) {
                document.getElementById('projects').style.display = 'none';
            }
            if (document.getElementsByClassName('education-entry').length === 0) {
                document.getElementById('education').style.background = 'black';
            }
            if (document.getElementsByClassName('flex-item').length === 0) {
                document.getElementById('letsConnect').style.display = 'none';
            }
            if (document.getElementById('map') === null) {
                document.getElementById('mapDiv').style.display = 'none';
            }
        }
    };

    let mapView = {
        init: function() {
            var googleMap = '<div id="map"></div>';

            var map;

            let initializeMap = function() {
                var locations;
                var mapOptions = {
                    disableDefaultUI: false
                };

                map = new google.maps.Map(document.querySelector('#map'), mapOptions);


                let createMapMarker = function(placeData) {

                    var lat = placeData.geometry.location.lat();
                    var lon = placeData.geometry.location.lng();
                    var name = placeData.formatted_address;
                    var bounds = window.mapBounds;

                    var marker = new google.maps.Marker({
                        map: map,
                        position: placeData.geometry.location,
                        title: name
                    });

                    var infoWindow = new google.maps.InfoWindow({
                        content: name
                    });

                    google.maps.event.addListener(marker, 'click', function() {
                        infoWindow.open(map, marker);
                    });

                    bounds.extend(new google.maps.LatLng(lat, lon));

                    map.fitBounds(bounds);

                    map.setCenter(bounds.getCenter());
                };

                let callback = function(results, status) {
                    if (status == google.maps.places.PlacesServiceStatus.OK) {
                        createMapMarker(results[0]);
                    }
                };

                let pinPoster = function(locations) {

                    var service = new google.maps.places.PlacesService(map);

                    for (var place in locations) {
                        var request = { query: locations[place] };
                        service.textSearch(request, callback);
                    }
                };

                window.mapBounds = new google.maps.LatLngBounds();

                locations = octapus.locationFinder();

                pinPoster(locations);
            };

            window.addEventListener('load', initializeMap);

            window.addEventListener('resize', function(e) {
                map.fitBounds(window.mapBounds);
            });

            $("#mapDiv").append(googleMap);
        }
    };

    octapus.init();
});