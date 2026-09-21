# Mayuresh Nilesh Wankhade
**Python & Django Developer | Database Architecture & Backend Systems**

* **Location:** Pune, Maharashtra, India
* **Email:** mayureshwankhade968@gmail.com
* **GitHub:** [github.com/mayurwan207](https://github.com/mayurwan207)
* **LinkedIn:** [linkedin.com/in/mayuresh-wankhade](https://linkedin.com/in/mayuresh-wankhade)
* **LeetCode:** [leetcode.com/u/Mayu_coder](https://leetcode.com/u/Mayu_coder/)

---

## 🚀 Professional Summary
I am a Computer Engineering student at **Pimpri Chinchwad College of Engineering (PCCOE), Pune**, specializing in **Python & Django Development, Database Architecture, and Backend Systems**. I bridge technical execution with real-world utility by building robust server-side infrastructures, scalable APIs, and optimized database schemas. Currently, I am actively honing my **Data Structures & Algorithms (DSA)** skills across platforms like **LeetCode** ([@Mayu_coder](https://leetcode.com/u/Mayu_coder/)) and **Code360**, with a focus on applying algorithmic concepts to real-world engineering problems—such as route optimization and live tracking models using Dijkstra's algorithm.

---

## 💡 Specialized Domains & Core Competencies

### Specialized Domains
* **Backend Systems Engineering:** Building scalable server-side architectures, RESTful APIs, and core application workflows using Python and Django.
* **Database Architecture & Optimization:** Designing normalized relational schemas, query tuning, distributed reservation locking, and database modeling with PostgreSQL and SQL engines.
* **Geospatial Analytics & Location Intelligence:** Developing geospatial data pipelines, streaming location analytics, Kernel Density Estimation (KDE) footfall heatmaps, and site scoring engines.
* **Applied Machine Learning & Predictive Modeling:** End-to-end ML pipeline engineering—including feature engineering, log transformations, ensemble learning (XGBoost, Random Forest, CNNs), and model deployment.
* **Algorithmic Problem Solving & DSA:** Applying data structures and graph/tree algorithms (e.g., Dijkstra's algorithm for pathfinding, Huffman coding prefix trees, and OSRM routing engines) to solve complex system design problems.

### Technical Stack & Platforms
* **Languages:** Python 3.10+, C++, JavaScript, SQL, HTML5, CSS3
* **Frameworks & ML Libraries:** Django, Django REST Framework, Scikit-learn, XGBoost, CNNs, Pandas, NumPy, Matplotlib, Seaborn, Optuna
* **Geospatial & Data Pipelines:** Google Earth Engine APIs, OpenStreetMap, GraphHopper, Kernel Density Estimation (KDE), Apache Kafka
* **Databases & Auth:** PostgreSQL, SQLite, MySQL, JWT Authentication
* **Mapping & Routing:** Leaflet, OpenStreetMap, OSRM Routing Engine
* **Deployment & Model Serialization:** Vercel, Joblib, Pickle
* **Competitive Programming & DSA Platforms:** LeetCode ([Mayu_coder](https://leetcode.com/u/Mayu_coder/)), Code360
* **Tools & Version Control:** Git, GitHub, VS Code, Jupyter Notebook, High-Performance GPU Architecture / CUDA concepts

---

## 🏆 Featured Hackathons & Projects

### 🌟 1. PulseNet-GIS — GIS for Smarter Emergency Care
* **Live App:** [pulsenet-gis.vercel.app](https://pulsenet-gis.vercel.app/)
* **Event:** Innovate 4 Impact: AI4SDG Global Hackathon 2026 (Top 60 Global Finalist)
* **Team:** Ragnarok (Team Leader: Mayuresh Wankhade)
* **Tech Stack:** Python, Django, PostgreSQL, Leaflet, OpenStreetMap, OSRM Routing Engine, JWT, HTML5/CSS3/JavaScript
* **Problem & Impact:**
  * Analyzed 38,823 Maharashtra MEMS ambulance transfer records revealing that **58.3% of transfers were PHC-to-Hospital transfers**, taking an average transfer time of **222.8 minutes** due to uncoordinated referrals into full or under-equipped hospitals.
* **Architecture & Backend:**
  * **Matching Engine:** Dynamically filters and ranks hospitals based on live inventory (ICU beds, oxygen, blood units, specialists) combined with geographical distance and current load.
  * **Distributed Resource Locking:** Prevents race conditions by temporarily locking beds and critical medical assets in PostgreSQL the moment a match is made, releasing locks upon rejection or timer expiration.
  * **Ambulance Allocation & Routing:** Sorts ambulances by real ETA using the OSRM (Open Source Routing Machine) Engine, featuring a 15-second cascading driver notification protocol and live GPS tracking.

---

### 🌟 2. StoreSight AI — Predictive Retail Site Selection Platform
* **Event:** Idea Inception 2025 (PCCOE)
* **Team:** Team PCCOE (Category: Business Proposition & Software Solution)
* **Tech Stack:** Python, Geospatial ML Pipeline, XGBoost, CNNs, Apache Kafka, Google Earth Engine APIs, GraphHopper, PostgreSQL, Optuna
* **Problem & Impact:**
  * Addressed the high 40–60% failure rate among first-time shop owners and small retail chains in India's $1 Trillion retail sector who rely on guesswork for site selection, causing 15–25% rent overpayments.
* **Architecture & ML Pipeline:**
  * **Hyper-local Data Fusion:** Aggregates satellite imagery (Google Earth Engine), mobile footfall/telecom data, municipal zoning GIS maps, and POI density (OpenStreetMap, Google Places API).
  * **100+ Feature Engineering Pipeline:** Computes pedestrian density heatmaps via Kernel Density Estimation (KDE), accessibility proximity scores via GraphHopper, and rent proxies from real estate scrapers.
  * **Predictive Location Scoring Engine:** Features an ensemble of XGBoost (revenue prediction) and CNNs on geospatial rasters, outputting a 0–100 site score (40% footfall, 25% competition gap, 20% zoning compliance, 15% growth trajectory) optimized via Optuna.

---

### 3. PropertyIQ — Machine Learning Estate Price Predictor
* **Live App:** [estatepredictor.vercel.app](https://estatepredictor.vercel.app)
* **Tech Stack:** Python 3.10+, Scikit-learn, XGBoost, Random Forest, Pandas, NumPy, Joblib, Vercel
* **Problem & Overview:**
  * Developed a supervised machine learning regression model and interactive real estate platform predicting residential property valuations across Mumbai based on 18 input features (location, floor ratio, area, property age, furnishing, Vastu compliance).
* **Architecture & ML Pipeline:**
  * **Data Pipeline & Preprocessing:** Executed log transformation to normalize right-skewed pricing distributions, handled IQR outlier filtering, and engineered domain-specific features (`price_per_sqft`, `floor_ratio`, `property_age`).
  * **Model Training & Comparison:** Evaluated Linear Regression ($R^2 = 0.71$), Random Forest ($R^2 = 0.85$), and **XGBoost ($R^2 = 0.91$, $RMSE = 1,12,700$, $MAE = 79,800$)**, selecting hyperparameter-tuned XGBoost for production.
  * **Financial Intelligence Engine:** Calculates monthly EMI estimations, rental yield percentage, and outputs dynamic investment signals (**BUY / HOLD / SELL**) based on neighborhood valuation ratios.

### 4. Huffman Coding Text Compressor & Visualizer
* **Live App:** [huffmancodingg.netlify.app](https://huffmancodingg.netlify.app/)
* **Tech Stack:** JavaScript, HTML5, CSS3, Data Structures & Algorithms (Min-Heap / Greedy Strategy)
* **Overview & Architecture:**
  * Implemented an interactive Huffman Coding algorithm visualizer to encode and compress text inputs using greedy optimal prefix-free binary tree construction.
  * Dynamically constructs min-heap priority queues, generates character frequency mapping tables, and outputs live compression metrics including bits saved and compression ratio.

---

## 🛠 Algorithmic Exploration & DSA Real-World Applications

* **Machine Learning & Statistical Optimization:** Built **StoreSight AI** (XGBoost + CNNs on spatial rasters with Optuna tuning) and **PropertyIQ** (`estatepredictor.vercel.app`) for spatial retail intelligence and property valuation.
* **Route Optimization & Real-Time Tracking Simulation:** Studying and implementing graph search algorithms (e.g., Dijkstra's algorithm, GraphHopper, and OSRM routing engines) to model real-world routing and tracking mechanics.
* **Data Compression & Huffman Coding:** Built a live compression utility (`huffmancodingg.netlify.app`) utilizing min-heaps and greedy frequency trees for optimal prefix encoding.
* **Continuous Skill Building:** Actively practicing problem-solving, graph algorithms, dynamic programming, and data structures on **LeetCode** ([Mayu_coder](https://leetcode.com/u/Mayu_coder/)) and **Code360**.

---

## 🏆 Leadership & Professional Experience

### SY Coordinator — ACM-W Student Chapter (PCCOE)
* **Responsibilities:**
  * Lead technical event operations, logistics execution, and financial management with zero-deficit targets.
  * Organized technical workshops, hackathons, and departmental initiatives for student developers.

### Operations & Financial Tracking Support — Vehicle Finance Operations
* **Responsibilities:**
  * Handled workflow tracking, document verification, and operational financial record auditing with zero-discrepancy standards.

---

## 🎓 Education

### Bachelor of Technology (B.Tech) in Computer Engineering
* **Institution:** Pimpri Chinchwad College of Engineering (PCCOE), Nigdi, Pune
* **Key Coursework:** Data Structures & Algorithms, Computer Organization, Digital Electronics, Database Management Systems, Web Engineering

---

## 🎯 Interests & Personal Endeavors
* **High-Performance Computing:** Deep learning hardware pipelines, NVIDIA GPU architecture, and neural networks.
* **Entrepreneurship:** Tech concept development for *Neevati* (AgriTech & rural development platform).
* **Personal Interests:** Guitar, Football, Motorcycle Riding.



