const categoryData = [
  {
    name: "Animals & Pets",
    subcategories: [
      {
        name: "Wildlife",
      },
      {
        name: "Dogs",
      },
      {
        name: "Cats",
      },
      {
        name: "Birds",
      },
      {
        name: "Fish & Aquatic Pets",
      },
      {
        name: "Reptiles & Amphibians",
      },
      {
        name: "Small Mammals",
      },
      {
        name: "Insects & Arachnids",
      },
      {
        name: "Exotic Pets",
      },
      {
        name: "Animal Care & Training",
      },
      {
        name: "Veterinary Medicine",
      },
      {
        name: "Animal Rescue & Adoption",
      },
      {
        name: "Animal Rights & Welfare",
      },
    ],
  },
  {
    name: "Architecture & Design",
    subcategories: [
      {
        name: "Residential Architecture",
      },
      {
        name: "Commercial Architecture",
      },
      {
        name: "Interior Design",
      },
      {
        name: "Landscape Architecture",
      },
      {
        name: "Urban Planning & Design",
      },
      {
        name: "Sustainable Design",
      },
      {
        name: "Architectural History & Theory",
      },
      {
        name: "Architectural Styles",
      },
      {
        name: "Architectural Visualization",
      },
      {
        name: "Architectural Technology & Materials",
      },
      {
        name: "Furniture Design",
      },
      {
        name: "Industrial Design",
      },
      {
        name: "Graphic Design",
      },
      {
        name: "Typography",
      },
    ],
  },
  {
    name: "Art & Photography",
    subcategories: [
      {
        name: "Painting",
      },
      {
        name: "Drawing & Illustration",
      },
      {
        name: "Sculpture",
      },
      {
        name: "Printmaking",
      },
      {
        name: "Ceramics & Pottery",
      },
      {
        name: "Textile & Fiber Arts",
      },
      {
        name: "Mixed Media",
      },
      {
        name: "Digital Art",
      },
      {
        name: "Street Art & Graffiti",
      },
      {
        name: "Art History & Theory",
      },
      {
        name: "Art Galleries & Museums",
      },
      {
        name: "Art Education & Workshops",
      },
      {
        name: "Art Supplies & Tools",
      },
      {
        name: "Photography Genres",
        subcategories: [
          {
            name: "Landscape Photography",
          },
          {
            name: "Portrait Photography",
          },
          {
            name: "Wildlife Photography",
          },
          {
            name: "Macro Photography",
          },
          {
            name: "Street Photography",
          },
          {
            name: "Travel Photography",
          },
          {
            name: "Architectural Photography",
          },
          {
            name: "Astrophotography",
          },
        ],
      },
      {
        name: "Photography Techniques",
      },
      {
        name: "Photography Equipment & Gear",
      },
      {
        name: "Photo Editing & Post-Processing",
      },
      {
        name: "Videography & Cinematography",
      },
    ],
  },
  {
    name: "Automotive",
    subcategories: [
      {
        name: "Cars",
        subcategories: [
          {
            name: "Sedans",
          },
          {
            name: "SUVs",
          },
          {
            name: "Coupes",
          },
          {
            name: "Convertibles",
          },
          {
            name: "Sports Cars",
          },
          {
            name: "Electric & Hybrid Cars",
          },
        ],
      },
      {
        name: "Motorcycles",
        subcategories: [
          {
            name: "Cruisers",
          },
          {
            name: "Sport Bikes",
          },
          {
            name: "Touring Bikes",
          },
          {
            name: "Dirt Bikes",
          },
          {
            name: "Scooters",
          },
        ],
      },
      {
        name: "Trucks & Commercial Vehicles",
      },
      {
        name: "Auto Repair & Maintenance",
      },
      {
        name: "Car Modifications & Customization",
      },
      {
        name: "Automotive Technology & Innovations",
      },
      {
        name: "Car Accessories & Gadgets",
      },
      {
        name: "Racing & Motorsports",
      },
      {
        name: "Classic & Vintage Cars",
      },
      {
        name: "Car Reviews & Comparisons",
      },
      {
        name: "Automotive Industry News",
      },
      {
        name: "Car Shows & Events",
      },
    ],
  },
  {
    name: "Beauty & Fashion",
    subcategories: [
      {
        name: "Makeup",
      },
      {
        name: "Skincare",
      },
      {
        name: "Haircare",
      },
      {
        name: "Nail care",
      },
      {
        name: "Fragrances",
      },
      {
        name: "Fashion trends",
      },
      {
        name: "Accessories",
      },
      {
        name: "Personal styling",
      },
      {
        name: "Beauty tutorials",
      },
      {
        name: "Cosmetic surgery",
      },
      {
        name: "Natural beauty remedies",
      },
      {
        name: "Sustainable fashion",
      },
      {
        name: "Ethical fashion",
      },
      {
        name: "Men's fashion",
      },
      {
        name: "Women's fashion",
      },
      {
        name: "Children's fashion",
      },
      {
        name: "Plus size fashion",
      },
      {
        name: "Street style",
      },
      {
        name: "Fashion shows & events",
      },
      {
        name: "Fashion design",
      },
      {
        name: "Beauty products reviews",
      },
    ],
  },
  {
    name: "Books & Literature",
    subcategories: [
      {
        name: "Fiction",
        subcategories: [
          {
            name: "Science fiction",
          },
          {
            name: "Fantasy",
          },
          {
            name: "Romance",
          },
          {
            name: "Mystery",
          },
          {
            name: "Thriller",
          },
          {
            name: "Horror",
          },
          {
            name: "Historical fiction",
          },
          {
            name: "Young adult",
          },
          {
            name: "Children's literature",
          },
        ],
      },
      {
        name: "Non-fiction",
        subcategories: [
          {
            name: "Biographies & memoirs",
          },
          {
            name: "History",
          },
          {
            name: "Science & technology",
          },
          {
            name: "Self-help & personal development",
          },
          {
            name: "Travel",
          },
          {
            name: "True crime",
          },
          {
            name: "Health & wellness",
          },
          {
            name: "Religion & spirituality",
          },
          {
            name: "Politics & social sciences",
          },
          {
            name: "Business & economics",
          },
          {
            name: "Cookbooks",
          },
          {
            name: "Sports & outdoors",
          },
          {
            name: "Essays & commentary",
          },
        ],
      },
      {
        name: "Poetry",
      },
      {
        name: "Drama & plays",
      },
      {
        name: "Literary criticism & analysis",
      },
      {
        name: "Book clubs & discussion",
      },
      {
        name: "Writing & publishing",
      },
      {
        name: "Author interviews",
      },
      {
        name: "Book reviews",
      },
      {
        name: "Audiobooks",
      },
      {
        name: "E-books",
      },
      {
        name: "Libraries & bookstores",
      },
      {
        name: "Literary awards & events",
      },
    ],
  },
  {
    name: "Career & Education",
    subcategories: [
      {
        name: "Career Guidance & Counseling",
      },
      {
        name: "Job Searching & Interviewing",
      },
      {
        name: "Resume Writing & Cover Letters",
      },
      {
        name: "Networking & Personal Branding",
      },
      {
        name: "Online Learning & MOOCs",
      },
      {
        name: "Higher Education & Universities",
      },
      {
        name: "Vocational Training & Trade Schools",
      },
      {
        name: "Scholarships & Financial Aid",
      },
      {
        name: "Professional Development & Training",
      },
      {
        name: "Internships & Co-op Programs",
      },
      {
        name: "Certifications & Licenses",
      },
      {
        name: "K-12 Education & Homeschooling",
      },
      {
        name: "Special Education & Learning Disabilities",
      },
      {
        name: "Teaching & Classroom Resources",
      },
      {
        name: "Educational Technology & Tools",
      },
      {
        name: "Language Learning & Linguistics",
      },
      {
        name: "Study Abroad Programs",
      },
      {
        name: "Test Preparation & Standardized Tests",
      },
      {
        name: "Educational Policy & Reform",
      },
    ],
  },
  {
    name: "Celebrities & Entertainment",
    subcategories: [
      {
        name: "Actors & Actresses",
      },
      {
        name: "Musicians & Bands",
      },
      {
        name: "TV Personalities & Reality Stars",
      },
      {
        name: "Comedians & Humorists",
      },
      {
        name: "Directors & Producers",
      },
      {
        name: "Models & Fashion Icons",
      },
      {
        name: "Athletes & Sports Personalities",
      },
      {
        name: "Authors & Literary Figures",
      },
      {
        name: "Influencers & Social Media Stars",
      },
      {
        name: "Politicians & World Leaders",
      },
      {
        name: "Visual Artists & Designers",
      },
      {
        name: "Celebrity News & Gossip",
      },
      {
        name: "Interviews & Profiles",
      },
      {
        name: "Awards Shows & Events",
      },
      {
        name: "Red Carpet & Fashion",
      },
      {
        name: "Scandals & Controversies",
      },
      {
        name: "Celebrity Lifestyle & Homes",
      },
      {
        name: "Fan Clubs & Forums",
      },
      {
        name: "Memorabilia & Collectibles",
      },
    ],
  },
  {
    name: "Charity & Non-Profit",
    subcategories: [
      {
        name: "Humanitarian & Disaster Relief",
      },
      {
        name: "Poverty & Hunger Alleviation",
      },
      {
        name: "Education & Literacy Initiatives",
      },
      {
        name: "Health & Medical Research",
      },
      {
        name: "Children & Youth Programs",
      },
      {
        name: "Environmental Conservation & Sustainability",
      },
      {
        name: "Animal Welfare & Rescue",
      },
      {
        name: "Civil Rights & Social Justice",
      },
      {
        name: "Community Development & Housing",
      },
      {
        name: "Veterans & Military Support",
      },
      {
        name: "Mental Health & Well-being",
      },
      {
        name: "Arts & Culture Preservation",
      },
      {
        name: "International Aid & Development",
      },
      {
        name: "Refugee & Immigration Support",
      },
      {
        name: "LGBTQ+ Advocacy & Support",
      },
      {
        name: "Disability Services & Accessibility",
      },
      {
        name: "Non-profit Management & Fundraising",
      },
      {
        name: "Philanthropy & Charitable Giving",
      },
      {
        name: "Volunteer Opportunities & Community Service",
      },
      {
        name: "Social Entrepreneurship & Innovation",
      },
      {
        name: "Advocacy & Public Policy",
      },
    ],
  },
  {
    name: "Children & Parenting",
    subcategories: [
      {
        name: "Pregnancy & Childbirth",
      },
      {
        name: "Newborn Care",
      },
      {
        name: "Early Childhood Development",
      },
      {
        name: "Parenting Styles",
      },
      {
        name: "Discipline & Behavior Management",
      },
      {
        name: "Nutrition & Health",
      },
      {
        name: "Education & Learning",
      },
      {
        name: "Special Needs & Disabilities",
      },
      {
        name: "Child Safety",
      },
      {
        name: "Family Activities & Bonding",
      },
      {
        name: "Toys & Games",
      },
      {
        name: "Parenting Support & Resources",
      },
    ],
  },
  {
    name: "Computers & Technology",
    subcategories: [
      {
        name: "Hardware",
        subcategories: [
          {
            name: "Desktops & Laptops",
          },
          {
            name: "Mobile Devices",
          },
          {
            name: "Peripherals & Accessories",
          },
          {
            name: "Networking & Connectivity",
          },
          {
            name: "Data Storage",
          },
        ],
      },
      {
        name: "Software",
        subcategories: [
          {
            name: "Operating Systems",
          },
          {
            name: "Productivity Applications",
          },
          {
            name: "Graphic Design & Multimedia",
          },
          {
            name: "Security & Privacy",
          },
          {
            name: "Business & Enterprise Solutions",
          },
        ],
      },
      {
        name: "Programming & Development",
        subcategories: [
          {
            name: "Web Development",
          },
          {
            name: "Mobile App Development",
          },
          {
            name: "Data Science & Machine Learning",
          },
          {
            name: "Game Development",
          },
          {
            name: "Programming Languages",
          },
          {
            name: "Software Engineering",
          },
        ],
      },
      {
        name: "Internet & Networking",
        subcategories: [
          {
            name: "Web Browsers",
          },
          {
            name: "Social Media & Online Communities",
          },
          {
            name: "Search Engines & SEO",
          },
          {
            name: "Online Privacy & Security",
          },
          {
            name: "Cloud Computing & Storage",
          },
        ],
      },
      {
        name: "Emerging Technologies",
        subcategories: [
          {
            name: "Artificial Intelligence",
          },
          {
            name: "Virtual Reality & Augmented Reality",
          },
          {
            name: "Blockchain & Cryptocurrency",
          },
          {
            name: "Internet of Things (IoT)",
          },
          {
            name: "Robotics & Automation",
          },
        ],
      },
    ],
  },
  {
    name: "Crafts & DIY",
    subcategories: [
      {
        name: "Home Improvement & Repair",
        subcategories: [
          {
            name: "Woodworking & Carpentry",
          },
          {
            name: "Plumbing & Electrical",
          },
          {
            name: "Painting & Decorating",
          },
          {
            name: "Landscaping & Gardening",
          },
        ],
      },
      {
        name: "Sewing & Textiles",
        subcategories: [
          {
            name: "Clothing & Accessories",
          },
          {
            name: "Quilting & Patchwork",
          },
          {
            name: "Embroidery & Needlework",
          },
          {
            name: "Knitting & Crochet",
          },
        ],
      },
      {
        name: "Paper Crafts",
        subcategories: [
          {
            name: "Cardmaking & Scrapbooking",
          },
          {
            name: "Origami & Paper Folding",
          },
          {
            name: "Papercutting & Stenciling",
          },
          {
            name: "Bookbinding & Journaling",
          },
        ],
      },
      {
        name: "Fine Arts",
        subcategories: [
          {
            name: "Drawing & Sketching",
          },
          {
            name: "Painting & Watercolor",
          },
          {
            name: "Sculpture & Ceramics",
          },
          {
            name: "Printmaking & Etching",
          },
        ],
      },
      {
        name: "Jewelry Making",
        subcategories: [
          {
            name: "Beading & Wirework",
          },
          {
            name: "Metalwork & Soldering",
          },
          {
            name: "Polymer Clay & Resin",
          },
          {
            name: "Macramé & Knotting",
          },
        ],
      },
      {
        name: "Upcycling & Repurposing",
        subcategories: [
          {
            name: "Furniture Restoration",
          },
          {
            name: "Clothing & Accessory Customization",
          },
          {
            name: "Reclaimed Material Projects",
          },
          {
            name: "Sustainable Crafting",
          },
        ],
      },
      {
        name: "Holiday & Seasonal Crafts",
        subcategories: [
          {
            name: "Christmas & Winter",
          },
          {
            name: "Halloween & Fall",
          },
          {
            name: "Easter & Spring",
          },
          {
            name: "Valentine's Day & Love-Themed",
          },
        ],
      },
      {
        name: "Crafting Techniques & Tools",
        subcategories: [
          {
            name: "Silhouette & Cricut Machines",
          },
          {
            name: "3D Printing & Modeling",
          },
          {
            name: "Calligraphy & Hand Lettering",
          },
          {
            name: "Mixed Media & Collage",
          },
        ],
      },
    ],
  },
  {
    name: "Culture & Society",
    subcategories: [
      {
        name: "Anthropology",
      },
      {
        name: "Cultural diversity",
      },
      {
        name: "Ethnicity & race",
      },
      {
        name: "Festivals & celebrations",
      },
      {
        name: "Gender & sexuality",
      },
      {
        name: "Globalization & cultural exchange",
      },
      {
        name: "Human rights",
      },
      {
        name: "Language & linguistics",
      },
      {
        name: "Local customs & traditions",
      },
      {
        name: "Religion & spirituality",
      },
      {
        name: "Social issues & movements",
      },
      {
        name: "Sociology",
      },
      {
        name: "Subcultures",
      },
      {
        name: "Urban & rural life",
      },
      {
        name: "World cultures",
      },
    ],
  },
  {
    name: "Dating & Relationships",
    subcategories: [
      {
        name: "Casual dating",
      },
      {
        name: "Communication in relationships",
      },
      {
        name: "Conflict resolution",
      },
      {
        name: "Dating advice & tips",
      },
      {
        name: "Dating apps & websites",
      },
      {
        name: "Divorce & separation",
      },
      {
        name: "Family & parenting",
      },
      {
        name: "Friendships",
      },
      {
        name: "LGBTQ+ relationships",
      },
      {
        name: "Long-distance relationships",
      },
      {
        name: "Marriage & partnerships",
      },
      {
        name: "Online dating",
      },
      {
        name: "Relationship milestones",
      },
      {
        name: "Relationship stages",
      },
      {
        name: "Romantic relationships",
      },
      {
        name: "Senior dating",
      },
      {
        name: "Single life",
      },
    ],
  },
  {
    name: "Environment & Sustainability",
    subcategories: [
      {
        name: "Biodiversity & ecosystems",
      },
      {
        name: "Climate change",
      },
      {
        name: "Conservation & preservation",
      },
      {
        name: "Eco-friendly products",
      },
      {
        name: "Energy efficiency & renewable energy",
      },
      {
        name: "Environmental activism",
      },
      {
        name: "Environmental education",
      },
      {
        name: "Environmental policy & regulations",
      },
      {
        name: "Food waste & sustainable agriculture",
      },
      {
        name: "Green technology & innovation",
      },
      {
        name: "Natural disasters & their impacts",
      },
      {
        name: "Pollution & waste management",
      },
      {
        name: "Sustainable development",
      },
      {
        name: "Sustainable living & lifestyle",
      },
      {
        name: "Urban planning & green cities",
      },
      {
        name: "Water resources management",
      },
      {
        name: "Wildlife conservation",
      },
    ],
  },
  {
    name: "Events & Conferences",
    subcategories: [
      {
        name: "Academic & Educational",
      },
      {
        name: "Art & Cultural Exhibitions",
      },
      {
        name: "Business & Networking",
      },
      {
        name: "Charity & Fundraising",
      },
      {
        name: "Concerts & Music Festivals",
      },
      {
        name: "Conventions & Trade Shows",
      },
      {
        name: "Family & Community",
      },
      {
        name: "Film & Theater",
      },
      {
        name: "Food & Drink Festivals",
      },
      {
        name: "Gaming & eSports",
      },
      {
        name: "Health & Wellness Events",
      },
      {
        name: "Holiday & Seasonal Celebrations",
      },
      {
        name: "Literary & Book Events",
      },
      {
        name: "Outdoor & Adventure",
      },
      {
        name: "Political & Government",
      },
      {
        name: "Religious & Spiritual",
      },
      {
        name: "Science & Technology",
      },
      {
        name: "Sports & Competitive Events",
      },
      {
        name: "Travel & Tourism",
      },
      {
        name: "Webinars & Online Events",
      },
      {
        name: "Workshops & Seminars",
      },
    ],
  },
  {
    name: "Fitness & Health",
    subcategories: [
      {
        name: "Aerobics & Cardio",
      },
      {
        name: "Alternative Medicine",
      },
      {
        name: "Bodybuilding & Strength Training",
      },
      {
        name: "CrossFit & Functional Training",
      },
      {
        name: "Dance & Movement",
      },
      {
        name: "Diet & Nutrition",
      },
      {
        name: "Exercise Equipment & Gear",
      },
      {
        name: "Group Fitness Classes",
      },
      {
        name: "Health Conditions & Diseases",
      },
      {
        name: "Injury Prevention & Rehabilitation",
      },
      {
        name: "Mental Health & Well-being",
      },
      {
        name: "Mindfulness & Meditation",
      },
      {
        name: "Personal Training & Coaching",
      },
      {
        name: "Pilates & Flexibility",
      },
      {
        name: "Running & Walking",
      },
      {
        name: "Sports & Athletics",
      },
      {
        name: "Swimming & Aquatics",
      },
      {
        name: "Weight Loss & Management",
      },
      {
        name: "Yoga & Stretching",
      },
    ],
  },
  {
    name: "Food & Cooking",
    subcategories: [
      {
        name: "Baking & Desserts",
      },
      {
        name: "Barbecue & Grilling",
      },
      {
        name: "Beverages & Drinks",
      },
      {
        name: "Breakfast & Brunch",
      },
      {
        name: "Canning & Preserving",
      },
      {
        name: "Cooking Techniques & Tutorials",
      },
      {
        name: "Culinary Travel & Food Tourism",
      },
      {
        name: "Dietary Restrictions & Allergies",
      },
      {
        name: "Food History & Culture",
      },
      {
        name: "Food Science & Chemistry",
      },
      {
        name: "Gourmet & Fine Dining",
      },
      {
        name: "Ingredients & Pantry Staples",
      },
      {
        name: "International & Regional Cuisine",
      },
      {
        name: "Kitchen Appliances & Gadgets",
      },
      {
        name: "Meal Planning & Prep",
      },
      {
        name: "Meat, Poultry & Seafood",
      },
      {
        name: "Plant-Based & Vegan",
      },
      {
        name: "Quick & Easy Meals",
      },
      {
        name: "Recipe Collections & Cookbooks",
      },
      {
        name: "Restaurants & Dining Out",
      },
      {
        name: "Salads & Vegetables",
      },
      {
        name: "Slow Cooking & Pressure Cooking",
      },
      {
        name: "Snacks & Appetizers",
      },
      {
        name: "Soups, Stews & Chilis",
      },
      {
        name: "Special Diets (e.g., Keto, Paleo, Gluten-Free)",
      },
      {
        name: "Street Food & Food Trucks",
      },
      {
        name: "Wine, Beer & Spirits",
      },
    ],
  },
  {
    name: "Gaming",
    subcategories: [
      {
        name: "Console Gaming (e.g., PlayStation, Xbox, Nintendo)",
      },
      {
        name: "PC Gaming",
      },
      {
        name: "Mobile Gaming",
      },
      {
        name: "Online Gaming",
      },
      {
        name: "Virtual Reality (VR) Gaming",
      },
      {
        name: "Augmented Reality (AR) Gaming",
      },
      {
        name: "eSports & Competitive Gaming",
      },
      {
        name: "Gaming News & Reviews",
      },
      {
        name: "Game Development & Design",
      },
      {
        name: "Game Streaming & Content Creation",
      },
      {
        name: "Indie Games",
      },
      {
        name: "Retro Gaming & Classic Games",
      },
      {
        name: "Gaming Communities & Forums",
      },
      {
        name: "Gaming Accessories & Hardware",
      },
      {
        name: "Game Genres (e.g., Role-playing, Action, Adventure, Strategy, Puzzle, Sports)",
      },
      {
        name: "Educational Games",
      },
    ],
  },
  {
    name: "Government & Politics",
    subcategories: [
      {
        name: "International Relations & Diplomacy",
      },
      {
        name: "Political Parties & Organizations",
      },
      {
        name: "Elections & Campaigns",
      },
      {
        name: "Political News & Commentary",
      },
      {
        name: "Political Theory & Philosophy",
      },
      {
        name: "Public Administration & Bureaucracy",
      },
      {
        name: "Public Policy & Legislation",
      },
      {
        name: "Political Activism & Advocacy",
      },
      {
        name: "Human Rights & Social Issues",
      },
      {
        name: "Constitutional Law & Legal Systems",
      },
      {
        name: "Military & Defense",
      },
      {
        name: "Intelligence Agencies & Espionage",
      },
      {
        name: "Political History",
      },
      {
        name: "Political Scandals & Corruption",
      },
      {
        name: "Geopolitics & Regional Politics",
      },
    ],
  },
  {
    name: "Health & Wellness",
    subcategories: [
      {
        name: "Nutrition & Diet",
      },
      {
        name: "Exercise & Fitness",
      },
      {
        name: "Mental Health & Well-being",
      },
      {
        name: "Stress Management & Relaxation",
      },
      {
        name: "Sleep & Sleep Disorders",
      },
      {
        name: "Chronic Illnesses & Disease Management",
      },
      {
        name: "Preventive Healthcare & Screening",
      },
      {
        name: "Alternative Medicine & Therapies",
      },
      {
        name: "Women's Health",
      },
      {
        name: "Men's Health",
      },
      {
        name: "Children's Health & Pediatrics",
      },
      {
        name: "Senior Health & Geriatrics",
      },
      {
        name: "Dental Health & Oral Care",
      },
      {
        name: "Sexual Health & Reproduction",
      },
      {
        name: "Substance Abuse & Recovery",
      },
      {
        name: "Weight Loss & Management",
      },
      {
        name: "Health News & Research",
      },
      {
        name: "Healthcare Systems & Insurance",
      },
      {
        name: "Personal Health Records & Monitoring",
      },
    ],
  },
  {
    name: "History",
    subcategories: [
      {
        name: "Ancient Civilizations",
      },
      {
        name: "Archaeology",
      },
      {
        name: "Art History",
      },
      {
        name: "Biographies",
      },
      {
        name: "Cultural History",
      },
      {
        name: "Economic History",
      },
      {
        name: "Historical Events",
      },
      {
        name: "Historical Figures",
      },
      {
        name: "Military History",
      },
      {
        name: "Natural History",
      },
      {
        name: "Political History",
      },
      {
        name: "Social History",
      },
      {
        name: "Technological History",
      },
      {
        name: "World History",
      },
    ],
  },
  {
    name: "Home & Garden",
    subcategories: [
      {
        name: "Architecture",
      },
      {
        name: "Cleaning & Organizing",
      },
      {
        name: "DIY Home Improvements",
      },
      {
        name: "Energy Efficiency",
      },
      {
        name: "Furniture Design",
      },
      {
        name: "Gardening & Landscaping",
      },
      {
        name: "Home Appliances",
      },
      {
        name: "Home Decor",
      },
      {
        name: "Home Safety & Security",
      },
      {
        name: "Interior Design",
      },
      {
        name: "Outdoor Living",
      },
      {
        name: "Pest Control",
      },
      {
        name: "Plumbing & Electrical",
      },
      {
        name: "Real Estate",
      },
      {
        name: "Renovation & Remodeling",
      },
      {
        name: "Smart Home Technology",
      },
    ],
  },
  {
    name: "Humor & Satire",
    subcategories: [
      {
        name: "Anecdotes & Stories",
      },
      {
        name: "Cartoons & Comics",
      },
      {
        name: "Comedy Films & TV Shows",
      },
      {
        name: "Dark Humor",
      },
      {
        name: "Internet Memes",
      },
      {
        name: "Jokes & Riddles",
      },
      {
        name: "Parodies & Spoofs",
      },
      {
        name: "Political Satire",
      },
      {
        name: "Pranks & Practical Jokes",
      },
      {
        name: "Puns & Wordplay",
      },
      {
        name: "Satirical Literature",
      },
      {
        name: "Sketch Comedy",
      },
      {
        name: "Stand-up Comedy",
      },
      {
        name: "Web Humor & Satire",
      },
    ],
  },
  {
    name: "Law & Legal",
    subcategories: [
      {
        name: "Administrative Law",
      },
      {
        name: "Bankruptcy Law",
      },
      {
        name: "Business & Corporate Law",
      },
      {
        name: "Civil Rights Law",
      },
      {
        name: "Constitutional Law",
      },
      {
        name: "Contract Law",
      },
      {
        name: "Criminal Law",
      },
      {
        name: "Environmental Law",
      },
      {
        name: "Family Law",
      },
      {
        name: "Health Law",
      },
      {
        name: "Immigration Law",
      },
      {
        name: "Intellectual Property Law",
      },
      {
        name: "International Law",
      },
      {
        name: "Labor & Employment Law",
      },
      {
        name: "Legal Education & Careers",
      },
      {
        name: "Legal Ethics & Professional Responsibility",
      },
      {
        name: "Legal History",
      },
      {
        name: "Legal Philosophy",
      },
      {
        name: "Legal Research & Writing",
      },
      {
        name: "Litigation & Dispute Resolution",
      },
      {
        name: "Media & Entertainment Law",
      },
      {
        name: "Personal Injury Law",
      },
      {
        name: "Property Law",
      },
      {
        name: "Real Estate Law",
      },
      {
        name: "Tax Law",
      },
      {
        name: "Tort Law",
      },
      {
        name: "Wills, Trusts & Estates",
      },
    ],
  },
  {
    name: "Lifestyle & Hobbies",
    subcategories: [
      {
        name: "Antiques & Collectibles",
      },
      {
        name: "Astronomy",
      },
      {
        name: "Board Games & Puzzles",
      },
      {
        name: "Camping & Outdoor Activities",
      },
      {
        name: "Coin & Stamp Collecting",
      },
      {
        name: "Crafts & DIY Projects",
      },
      {
        name: "Dance",
      },
      {
        name: "Drawing & Painting",
      },
      {
        name: "Film & Theater",
      },
      {
        name: "Gardening",
      },
      {
        name: "Genealogy & Family History",
      },
      {
        name: "Home Improvement",
      },
      {
        name: "Interior Design & Decorating",
      },
      {
        name: "Model Building",
      },
      {
        name: "Music & Instruments",
      },
      {
        name: "Needlework & Textile Crafts",
      },
      {
        name: "Photography",
      },
      {
        name: "Radio Control & Model Trains",
      },
      {
        name: "Reading & Book Clubs",
      },
      {
        name: "Scrapbooking & Paper Crafts",
      },
      {
        name: "Sculpture & Pottery",
      },
      {
        name: "Sports & Fitness",
      },
      {
        name: "Travel & Adventure",
      },
      {
        name: "Wine & Spirits",
      },
      {
        name: "Woodworking",
      },
    ],
  },
  {
    name: "Marketing & Advertising",
    subcategories: [
      {
        name: "Affiliate Marketing",
      },
      {
        name: "Branding",
      },
      {
        name: "Content Marketing",
      },
      {
        name: "Copywriting",
      },
      {
        name: "Digital Marketing",
      },
      {
        name: "Direct Marketing",
      },
      {
        name: "Email Marketing",
      },
      {
        name: "Event Marketing",
      },
      {
        name: "Guerrilla Marketing",
      },
      {
        name: "Influencer Marketing",
      },
      {
        name: "Market Research & Analysis",
      },
      {
        name: "Marketing Automation",
      },
      {
        name: "Marketing Ethics",
      },
      {
        name: "Marketing Metrics & Analytics",
      },
      {
        name: "Marketing Strategy & Planning",
      },
      {
        name: "Mobile Marketing",
      },
      {
        name: "Public Relations",
      },
      {
        name: "Search Engine Marketing (SEM)",
      },
      {
        name: "Search Engine Optimization (SEO)",
      },
      {
        name: "Social Media Marketing",
      },
      {
        name: "Traditional Advertising",
      },
      {
        name: "Video Marketing",
      },
      {
        name: "Viral Marketing",
      },
      {
        name: "Web Analytics",
      },
      {
        name: "Web Design & User Experience",
      },
    ],
  },
  {
    name: "Media & Journalism",
    subcategories: [
      {
        name: "Broadcast Journalism",
      },
      {
        name: "Investigative Journalism",
      },
      {
        name: "Photojournalism",
      },
      {
        name: "Online Journalism",
      },
      {
        name: "Print Journalism",
      },
      {
        name: "Citizen Journalism",
      },
      {
        name: "Podcasting & Radio",
      },
      {
        name: "Ethics & Standards",
      },
      {
        name: "Media Criticism & Analysis",
      },
      {
        name: "Reporting Techniques",
      },
      {
        name: "Journalism Education & Training",
      },
      {
        name: "Communication Theory",
      },
      {
        name: "Multimedia Storytelling",
      },
      {
        name: "Data Journalism",
      },
      {
        name: "Public Relations & Media Relations",
      },
      {
        name: "Social Media & Journalism",
      },
    ],
  },
  {
    name: "Medical & Healthcare",
    subcategories: [
      {
        name: "General Medicine",
      },
      {
        name: "Surgery",
      },
      {
        name: "Pediatrics",
      },
      {
        name: "Obstetrics & Gynecology",
      },
      {
        name: "Psychiatry & Mental Health",
      },
      {
        name: "Dentistry",
      },
      {
        name: "Nursing",
      },
      {
        name: "Pharmacology & Pharmacy",
      },
      {
        name: "Allied Health Professions (Physical Therapy, Occupational Therapy, etc.)",
      },
      {
        name: "Medical Research & Studies",
      },
      {
        name: "Healthcare Administration & Management",
      },
      {
        name: "Public Health & Epidemiology",
      },
      {
        name: "Preventive Medicine",
      },
      {
        name: "Nutrition & Dietetics",
      },
      {
        name: "Alternative & Complementary Medicine",
      },
      {
        name: "Medical Ethics",
      },
      {
        name: "Health Insurance & Policy",
      },
      {
        name: "Telemedicine & Digital Health",
      },
    ],
  },
  {
    name: "Movies & TV",
    subcategories: [
      {
        name: "Action & Adventure",
      },
      {
        name: "Animation & Cartoons",
      },
      {
        name: "Comedy",
      },
      {
        name: "Crime & Mystery",
      },
      {
        name: "Documentary",
      },
      {
        name: "Drama",
      },
      {
        name: "Fantasy & Science Fiction",
      },
      {
        name: "Historical & Period",
      },
      {
        name: "Horror & Thriller",
      },
      {
        name: "Romance",
      },
      {
        name: "War & Military",
      },
      {
        name: "Western",
      },
      {
        name: "Reality TV",
      },
      {
        name: "Game Shows",
      },
      {
        name: "Talk Shows & Variety Shows",
      },
      {
        name: "News & Current Affairs",
      },
      {
        name: "Children's & Family Programming",
      },
      {
        name: "Sports Broadcasting",
      },
      {
        name: "Streaming Services & Platforms",
      },
      {
        name: "Film & TV Production",
      },
      {
        name: "Screenwriting & Storytelling",
      },
      {
        name: "Cinematography & Visual Effects",
      },
      {
        name: "Film & TV Criticism & Reviews",
      },
    ],
  },
  {
    name: "Music & Audio",
    subcategories: [
      {
        name: "Genres",
        subcategories: [
          {
            name: "Classical",
          },
          {
            name: "Jazz",
          },
          {
            name: "Rock",
          },
          {
            name: "Pop",
          },
          {
            name: "Electronic",
          },
          {
            name: "Hip-Hop",
          },
          {
            name: "Folk",
          },
          {
            name: "Country",
          },
          {
            name: "World Music",
          },
        ],
      },
      {
        name: "Music Theory",
      },
      {
        name: "Music Production",
        subcategories: [
          {
            name: "Recording Techniques",
          },
          {
            name: "Mixing & Mastering",
          },
          {
            name: "Digital Audio Workstations",
          },
        ],
      },
      {
        name: "Musical Instruments",
        subcategories: [
          {
            name: "Guitar",
          },
          {
            name: "Piano",
          },
          {
            name: "Drums & Percussion",
          },
          {
            name: "Brass Instruments",
          },
          {
            name: "Woodwind Instruments",
          },
          {
            name: "String Instruments",
          },
          {
            name: "Electronic Instruments",
          },
        ],
      },
      {
        name: "Music Education",
      },
      {
        name: "Songwriting & Composition",
      },
      {
        name: "Music History",
      },
      {
        name: "Music Industry & Business",
      },
      {
        name: "Live Performances & Concerts",
      },
      {
        name: "Music Streaming & Downloading",
      },
      {
        name: "Podcasts & Radio",
      },
      {
        name: "Sound Design & Effects",
      },
      {
        name: "Audio Equipment & Gear",
      },
    ],
  },
  {
    name: "News & Current Affairs",
    subcategories: [
      {
        name: "World News",
      },
      {
        name: "Politics",
        subcategories: [
          {
            name: "International Relations",
          },
          {
            name: "Political Parties",
          },
          {
            name: "Elections",
          },
          {
            name: "Government Policies",
          },
        ],
      },
      {
        name: "Business & Economy",
        subcategories: [
          {
            name: "Stock Market",
          },
          {
            name: "Mergers & Acquisitions",
          },
          {
            name: "Economic Indicators",
          },
        ],
      },
      {
        name: "Science & Technology",
        subcategories: [
          {
            name: "Innovations",
          },
          {
            name: "Space Exploration",
          },
          {
            name: "Environment",
          },
        ],
      },
      {
        name: "Health & Medicine",
        subcategories: [
          {
            name: "Public Health",
          },
          {
            name: "Medical Research",
          },
          {
            name: "Mental Health",
          },
        ],
      },
      {
        name: "Education & Academia",
      },
      {
        name: "Sports News",
      },
      {
        name: "Entertainment & Celebrity News",
      },
      {
        name: "Lifestyle & Culture",
      },
      {
        name: "Local News",
      },
      {
        name: "Opinion & Editorial",
      },
      {
        name: "Investigative Journalism",
      },
    ],
  },
  {
    name: "Personal Development & Self-Improvement",
    subcategories: [
      {
        name: "Goal Setting & Planning",
      },
      {
        name: "Time Management & Productivity",
      },
      {
        name: "Communication Skills",
        subcategories: [
          {
            name: "Public Speaking",
          },
          {
            name: "Active Listening",
          },
          {
            name: "Writing Skills",
          },
        ],
      },
      {
        name: "Emotional Intelligence",
      },
      {
        name: "Stress Management & Relaxation Techniques",
      },
      {
        name: "Mindfulness & Meditation",
      },
      {
        name: "Confidence & Self-Esteem",
      },
      {
        name: "Personal Finance & Budgeting",
      },
      {
        name: "Career Development",
        subcategories: [
          {
            name: "Job Searching",
          },
          {
            name: "Interview Skills",
          },
          {
            name: "Networking",
          },
        ],
      },
      {
        name: "Leadership & Management",
      },
      {
        name: "Problem Solving & Decision Making",
      },
      {
        name: "Creativity & Innovation",
      },
      {
        name: "Personal Relationships",
        subcategories: [
          {
            name: "Building Connections",
          },
          {
            name: "Conflict Resolution",
          },
        ],
      },
      {
        name: "Health & Fitness",
        subcategories: [
          {
            name: "Nutrition",
          },
          {
            name: "Exercise",
          },
        ],
      },
      {
        name: "Spirituality & Religion",
      },
      {
        name: "Positive Psychology",
      },
      {
        name: "Motivation & Inspiration",
      },
      {
        name: "Hobbies & Interests",
      },
      {
        name: "Life Transitions & Change",
      },
    ],
  },
  {
    name: "Philosophy & Religion",
    subcategories: [
      {
        name: "Ancient Philosophy",
      },
      {
        name: "Eastern Philosophy",
      },
      {
        name: "Western Philosophy",
      },
      {
        name: "Metaphysics",
      },
      {
        name: "Epistemology",
      },
      {
        name: "Ethics & Moral Philosophy",
      },
      {
        name: "Political Philosophy",
      },
      {
        name: "Aesthetics",
      },
      {
        name: "Logic & Reasoning",
      },
      {
        name: "Philosophy of Science",
      },
      {
        name: "Philosophy of Mind",
      },
      {
        name: "Philosophy of Language",
      },
      {
        name: "Christianity",
      },
      {
        name: "Islam",
      },
      {
        name: "Judaism",
      },
      {
        name: "Hinduism",
      },
      {
        name: "Buddhism",
      },
      {
        name: "Sikhism",
      },
      {
        name: "Taoism",
      },
      {
        name: "Confucianism",
      },
      {
        name: "Shinto",
      },
      {
        name: "Paganism & Wicca",
      },
      {
        name: "Atheism & Agnosticism",
      },
      {
        name: "Spirituality & Mysticism",
      },
      {
        name: "Comparative Religion",
      },
      {
        name: "Religious History",
      },
      {
        name: "Theology & Religious Studies",
      },
    ],
  },
  {
    name: "Real Estate",
    subcategories: [
      {
        name: "Residential Real Estate",
        subcategories: [
          {
            name: "Single-Family Homes",
          },
          {
            name: "Condominiums",
          },
          {
            name: "Townhouses",
          },
          {
            name: "Apartments",
          },
          {
            name: "Co-ops",
          },
        ],
      },
      {
        name: "Commercial Real Estate",
        subcategories: [
          {
            name: "Retail",
          },
          {
            name: "Office Space",
          },
          {
            name: "Industrial",
          },
          {
            name: "Hotels",
          },
          {
            name: "Mixed-Use",
          },
        ],
      },
      {
        name: "Investment Properties",
      },
      {
        name: "Real Estate Development",
      },
      {
        name: "Real Estate Finance",
      },
      {
        name: "Real Estate Marketing",
      },
      {
        name: "Property Management",
      },
      {
        name: "Real Estate Law & Regulations",
      },
      {
        name: "Real Estate Appraisal & Valuation",
      },
      {
        name: "Home Improvement & Renovation",
      },
      {
        name: "Home Staging & Interior Design",
      },
      {
        name: "Architecture & Design",
      },
      {
        name: "Urban Planning & Land Use",
      },
      {
        name: "Real Estate Technology",
      },
      {
        name: "Real Estate Careers & Education",
      },
      {
        name: "Real Estate News & Trends",
      },
    ],
  },
  {
    name: "Recreation & Sports",
    subcategories: [
      {
        name: "Team Sports",
        subcategories: [
          { name: "Football" },
          { name: "Basketball" },
          { name: "Baseball" },
          { name: "Soccer" },
          { name: "Hockey" },
          { name: "Volleyball" },
          { name: "Rugby" },
          { name: "Cricket" },
        ],
      },
      {
        name: "Individual Sports",
        subcategories: [
          { name: "Tennis" },
          { name: "Golf" },
          { name: "Swimming" },
          { name: "Track & Field" },
          { name: "Boxing" },
          { name: "Wrestling" },
          { name: "Gymnastics" },
          { name: "Martial Arts" },
        ],
      },
      {
        name: "Adventure Sports",
        subcategories: [
          { name: "Rock Climbing" },
          { name: "Surfing" },
          { name: "Skateboarding" },
          { name: "Snowboarding" },
          { name: "Skiing" },
          { name: "Mountain Biking" },
          { name: "Scuba Diving" },
        ],
      },
      {
        name: "Water Sports",
        subcategories: [
          { name: "Sailing" },
          { name: "Rowing" },
          { name: "Kayaking" },
          { name: "Canoeing" },
        ],
      },
      {
        name: "Outdoor Recreation",
        subcategories: [
          { name: "Hiking" },
          { name: "Camping" },
          { name: "Fishing" },
          { name: "Hunting" },
        ],
      },
      {
        name: "Fitness & Exercise",
        subcategories: [
          { name: "Yoga" },
          { name: "Pilates" },
          { name: "Weightlifting" },
          { name: "Aerobics" },
          { name: "CrossFit" },
        ],
      },
      {
        name: "eSports & Gaming",
      },
      {
        name: "Motorsports",
        subcategories: [{ name: "Auto Racing" }, { name: "Motorcycle Racing" }],
      },
      {
        name: "Sports Equipment & Gear",
      },
      {
        name: "Sports Medicine & Injuries",
      },
      {
        name: "Sports History & Trivia",
      },
      {
        name: "Sports Coaching & Training",
      },
      {
        name: "Sports News & Commentary",
      },
    ],
  },
  {
    name: "Science & Research",
    subcategories: [
      {
        name: "Astronomy & Space Exploration",
      },
      {
        name: "Biology & Life Sciences",
      },
      {
        name: "Chemistry",
      },
      {
        name: "Earth Sciences & Geology",
      },
      {
        name: "Environmental Science & Ecology",
      },
      {
        name: "Health & Medical Research",
      },
      {
        name: "Materials Science & Engineering",
      },
      {
        name: "Mathematics & Statistics",
      },
      {
        name: "Neuroscience & Psychology",
      },
      {
        name: "Physics",
      },
      {
        name: "Social Sciences",
      },
      {
        name: "Technology & Innovation",
      },
      {
        name: "Research Institutions & Academia",
      },
      {
        name: "Scientific Journals & Publications",
      },
      {
        name: "Science Policy & Ethics",
      },
    ],
  },
  {
    name: "Shopping & E-commerce",
    subcategories: [
      {
        name: "Apparel & Accessories",
      },
      {
        name: "Arts & Crafts",
      },
      {
        name: "Automotive & Vehicle Parts",
      },
      {
        name: "Baby & Kids Products",
      },
      {
        name: "Beauty & Personal Care",
      },
      {
        name: "Books & eBooks",
      },
      {
        name: "Computers & Electronics",
      },
      {
        name: "Food & Beverage",
      },
      {
        name: "Furniture & Home Decor",
      },
      {
        name: "Gardening & Outdoor Supplies",
      },
      {
        name: "Health & Wellness Products",
      },
      {
        name: "Home Appliances",
      },
      {
        name: "Jewelry & Watches",
      },
      {
        name: "Movies, Music & Entertainment",
      },
      {
        name: "Office Supplies & Stationery",
      },
      {
        name: "Pet Supplies",
      },
      {
        name: "Shoes & Footwear",
      },
      {
        name: "Sports & Fitness Equipment",
      },
      {
        name: "Toys & Games",
      },
      {
        name: "Travel & Luggage",
      },
      {
        name: "E-commerce Platforms & Marketplaces",
      },
      {
        name: "Online Auctions & Classifieds",
      },
      {
        name: "Payment Systems & Digital Wallets",
      },
      {
        name: "Retailers & Brands",
      },
    ],
  },
  {
    name: "Social Media & Networking",
    subcategories: [
      {
        name: "Social Networking Platforms",
      },
      {
        name: "Microblogging & Short-form Content",
      },
      {
        name: "Photo & Image Sharing",
      },
      {
        name: "Video Sharing & Streaming",
      },
      {
        name: "Live Streaming & Broadcasting",
      },
      {
        name: "Professional Networking",
      },
      {
        name: "Online Communities & Forums",
      },
      {
        name: "Content Curation & Aggregation",
      },
      {
        name: "Social Bookmarking & Link Sharing",
      },
      {
        name: "Blogging Platforms & Content Management Systems",
      },
      {
        name: "Instant Messaging & Communication Apps",
      },
      {
        name: "Social Gaming & Virtual Worlds",
      },
      {
        name: "Social Media Analytics & Management Tools",
      },
      {
        name: "Social Media Advertising & Marketing",
      },
      {
        name: "Influencers & Content Creators",
      },
      {
        name: "Privacy & Security on Social Media",
      },
    ],
  },
  {
    name: "Software & Web Development",
    subcategories: [
      {
        name: "Backend Development",
        subcategories: [
          {
            name: "Database Management",
          },
          {
            name: "Server-Side Frameworks",
          },
          {
            name: "Cloud Computing",
          },
          {
            name: "API Development",
          },
        ],
      },
      {
        name: "Frontend Development",
        subcategories: [
          {
            name: "HTML, CSS, and JavaScript",
          },
          {
            name: "UI/UX Design",
          },
          {
            name: "Web Frameworks",
          },
          {
            name: "Accessibility",
          },
        ],
      },
      {
        name: "Mobile App Development",
        subcategories: [
          {
            name: "iOS Development",
          },
          {
            name: "Android Development",
          },
          {
            name: "Cross-Platform Development",
          },
        ],
      },
      {
        name: "Game Development",
        subcategories: [
          {
            name: "Game Engines",
          },
          {
            name: "2D & 3D Game Design",
          },
          {
            name: "Game Scripting",
          },
        ],
      },
      {
        name: "Programming Languages",
        subcategories: [
          {
            name: "Python",
          },
          {
            name: "Java",
          },
          {
            name: "JavaScript",
          },
          {
            name: "C++",
          },
          {
            name: "Ruby",
          },
        ],
      },
      {
        name: "Software Testing & QA",
        subcategories: [
          {
            name: "Unit Testing",
          },
          {
            name: "Integration Testing",
          },
          {
            name: "Performance Testing",
          },
        ],
      },
      {
        name: "DevOps & CI/CD",
        subcategories: [
          {
            name: "Continuous Integration",
          },
          {
            name: "Continuous Deployment",
          },
          {
            name: "Infrastructure as Code",
          },
        ],
      },
      {
        name: "Version Control",
        subcategories: [
          {
            name: "Git",
          },
          {
            name: "Mercurial",
          },
          {
            name: "Subversion",
          },
        ],
      },
      {
        name: "Cybersecurity & Ethical Hacking",
      },
      {
        name: "Open Source Projects",
      },
      {
        name: "Software Development Methodologies",
        subcategories: [
          {
            name: "Agile",
          },
          {
            name: "Scrum",
          },
          {
            name: "Waterfall",
          },
        ],
      },
    ],
  },
  {
    name: "Space & Astronomy",
    subcategories: [
      {
        name: "Solar System",
        subcategories: [
          {
            name: "Planets",
          },
          {
            name: "Moons",
          },
          {
            name: "Asteroids",
          },
          {
            name: "Comets",
          },
        ],
      },
      {
        name: "Stars & Constellations",
        subcategories: [
          {
            name: "Stellar Evolution",
          },
          {
            name: "Star Clusters",
          },
          {
            name: "Supernovae",
          },
        ],
      },
      {
        name: "Galaxies",
        subcategories: [
          {
            name: "Milky Way",
          },
          {
            name: "Spiral Galaxies",
          },
          {
            name: "Elliptical Galaxies",
          },
        ],
      },
      {
        name: "Cosmology",
        subcategories: [
          {
            name: "Big Bang Theory",
          },
          {
            name: "Dark Matter",
          },
          {
            name: "Dark Energy",
          },
        ],
      },
      {
        name: "Telescopes & Observatories",
        subcategories: [
          {
            name: "Optical Telescopes",
          },
          {
            name: "Radio Telescopes",
          },
          {
            name: "Space Telescopes",
          },
        ],
      },
      {
        name: "Space Exploration",
        subcategories: [
          {
            name: "Manned Spaceflight",
          },
          {
            name: "Unmanned Spacecraft",
          },
          {
            name: "Mars Exploration",
          },
          {
            name: "Moon Exploration",
          },
        ],
      },
      {
        name: "Astrophotography",
      },
      {
        name: "Astrobiology",
      },
      {
        name: "Astronomy History & Events",
      },
      {
        name: "Amateur Astronomy",
      },
    ],
  },
  {
    name: "Travel & Tourism",
    subcategories: [
      {
        name: "Destinations",
        subcategories: [
          {
            name: "Asia",
          },
          {
            name: "Europe",
          },
          {
            name: "North America",
          },
          {
            name: "South America",
          },
          {
            name: "Africa",
          },
          {
            name: "Oceania",
          },
        ],
      },
      {
        name: "Adventure Travel",
        subcategories: [
          {
            name: "Hiking & Trekking",
          },
          {
            name: "Scuba Diving & Snorkeling",
          },
          {
            name: "Skiing & Snowboarding",
          },
          {
            name: "Biking & Cycling",
          },
        ],
      },
      {
        name: "Budget Travel",
        subcategories: [
          {
            name: "Backpacking",
          },
          {
            name: "Hostels",
          },
          {
            name: "Couchsurfing",
          },
        ],
      },
      {
        name: "Luxury Travel",
        subcategories: [
          {
            name: "Luxury Resorts",
          },
          {
            name: "Private Villas",
          },
          {
            name: "Gourmet Experiences",
          },
        ],
      },
      {
        name: "Cultural Travel",
        subcategories: [
          {
            name: "World Heritage Sites",
          },
          {
            name: "Museums & Galleries",
          },
          {
            name: "Local Festivals & Events",
          },
        ],
      },
      {
        name: "Sustainable & Eco-Tourism",
        subcategories: [
          {
            name: "Responsible Travel",
          },
          {
            name: "Wildlife Conservation",
          },
          {
            name: "Environmental Impact",
          },
        ],
      },
      {
        name: "Family Travel",
        subcategories: [
          {
            name: "Family-Friendly Destinations",
          },
          {
            name: "Theme Parks",
          },
          {
            name: "Kid-Friendly Activities",
          },
        ],
      },
      {
        name: "Solo Travel",
      },
      {
        name: "Romantic Getaways",
        subcategories: [
          {
            name: "Honeymoon Destinations",
          },
          {
            name: "Couples Retreats",
          },
        ],
      },
      {
        name: "Road Trips & RV Travel",
      },
      {
        name: "Cruises & Sailing",
      },
      {
        name: "Travel Planning & Resources",
        subcategories: [
          {
            name: "Travel Guides",
          },
          {
            name: "Travel Tips",
          },
          {
            name: "Packing Lists",
          },
        ],
      },
      {
        name: "Travel Photography & Videography",
      },
    ],
  },
  {
    name: "Video & Animation",
    subcategories: [
      {
        name: "Animated Films",
      },
      {
        name: "Animation Techniques",
        subcategories: [
          {
            name: "2D Animation",
          },
          {
            name: "3D Animation",
          },
          {
            name: "Stop Motion",
          },
          {
            name: "Motion Graphics",
          },
        ],
      },
      {
        name: "CGI & Visual Effects",
      },
      {
        name: "Documentary Films",
      },
      {
        name: "Film Production",
        subcategories: [
          {
            name: "Directing",
          },
          {
            name: "Cinematography",
          },
          {
            name: "Screenwriting",
          },
          {
            name: "Film Editing",
          },
        ],
      },
      {
        name: "Live Streaming & Webinars",
      },
      {
        name: "Music Videos",
      },
      {
        name: "Short Films",
      },
      {
        name: "Television Shows",
      },
      {
        name: "Video Art",
      },
      {
        name: "Video Editing",
        subcategories: [
          {
            name: "Video Editing Software",
          },
          {
            name: "Color Grading",
          },
        ],
      },
      {
        name: "Virtual Reality & 360 Video",
      },
      {
        name: "Vlogging & Video Blogs",
      },
      {
        name: "YouTube Channels & Creators",
      },
    ],
  },
  {
    name: "Weather & Climate",
    subcategories: [
      {
        name: "Climate Change",
        subcategories: [
          {
            name: "Global Warming",
          },
          {
            name: "Greenhouse Gases",
          },
          {
            name: "Sea-Level Rise",
          },
          {
            name: "Climate Change Mitigation",
          },
        ],
      },
      {
        name: "Extreme Weather",
        subcategories: [
          {
            name: "Droughts",
          },
          {
            name: "Floods",
          },
          {
            name: "Heatwaves",
          },
          {
            name: "Hurricanes & Typhoons",
          },
          {
            name: "Storms & Tornadoes",
          },
          {
            name: "Wildfires",
          },
        ],
      },
      {
        name: "Meteorology",
        subcategories: [
          {
            name: "Atmospheric Science",
          },
          {
            name: "Forecasting & Prediction",
          },
          {
            name: "Satellite Imagery",
          },
          {
            name: "Weather Instruments",
          },
        ],
      },
      {
        name: "Natural Disasters",
        subcategories: [
          {
            name: "Earthquakes",
          },
          {
            name: "Tsunamis",
          },
          {
            name: "Volcanic Eruptions",
          },
        ],
      },
      {
        name: "Weather Phenomena",
        subcategories: [
          {
            name: "Clouds & Precipitation",
          },
          {
            name: "Lightning",
          },
          {
            name: "Rainbows & Halos",
          },
          {
            name: "Snow & Ice",
          },
        ],
      },
    ],
  },
  {
    name: "Wildlife & Nature",
    subcategories: [
      {
        name: "Amphibians",
        subcategories: [
          {
            name: "Frogs & Toads",
          },
          {
            name: "Salamanders & Newts",
          },
        ],
      },
      {
        name: "Birds",
        subcategories: [
          {
            name: "Birdwatching & Ornithology",
          },
          {
            name: "Parrots",
          },
          {
            name: "Raptors",
          },
          {
            name: "Songbirds",
          },
          {
            name: "Waterbirds",
          },
        ],
      },
      {
        name: "Conservation & Preservation",
        subcategories: [
          {
            name: "Biodiversity",
          },
          {
            name: "Endangered Species",
          },
          {
            name: "Habitat Restoration",
          },
          {
            name: "National Parks & Reserves",
          },
          {
            name: "Wildlife Rehabilitation",
          },
        ],
      },
      {
        name: "Fish & Aquatic Life",
        subcategories: [
          {
            name: "Coral Reefs",
          },
          {
            name: "Freshwater Fish",
          },
          {
            name: "Marine Life",
          },
          {
            name: "Sharks & Rays",
          },
        ],
      },
      {
        name: "Flora & Plants",
        subcategories: [
          {
            name: "Botany",
          },
          {
            name: "Flowers",
          },
          {
            name: "Fungi & Mushrooms",
          },
          {
            name: "Trees & Forests",
          },
        ],
      },
      {
        name: "Insects & Arthropods",
        subcategories: [
          {
            name: "Ants",
          },
          {
            name: "Bees & Wasps",
          },
          {
            name: "Butterflies & Moths",
          },
          {
            name: "Spiders & Scorpions",
          },
        ],
      },
      {
        name: "Mammals",
        subcategories: [
          {
            name: "Bats",
          },
          {
            name: "Bears",
          },
          {
            name: "Big Cats",
          },
          {
            name: "Elephants",
          },
          {
            name: "Primates",
          },
          {
            name: "Whales & Dolphins",
          },
        ],
      },
      {
        name: "Pets & Domestic Animals",
        subcategories: [
          {
            name: "Cats",
          },
          {
            name: "Dogs",
          },
          {
            name: "Exotic Pets",
          },
          {
            name: "Fishkeeping",
          },
          {
            name: "Horses",
          },
          {
            name: "Reptiles & Amphibians",
          },
        ],
      },
      {
        name: "Photography & Wildlife Art",
      },
      {
        name: "Wildlife Documentaries & TV Shows",
      },
    ],
  },
];
export default categoryData;
