// Edit this file to add, update, or reorder case studies.
// Nothing else in the app needs to change when you add a case.

export const NEXT_CASE = "AI Career Advisor";

export const CASES = [
  {
    id: "ecosense-ai",
    title: "EcoSense AI",
    status: "live",
    tags: ["machine learning", "streamlit", "energy", "python", "scikit-learn"],
    problem:
      "Households and small setups can struggle to understand what factors are driving their energy consumption and what changes could improve efficiency.",
    whatIDid:
      "Built EcoSense AI, a machine-learning-based energy consumption prediction and optimization system. Integrated a trained prediction model and scaler into a Streamlit application and built a user-facing workflow that takes the model's required inputs, predicts energy usage, identifies major contributors to consumption, calculates report-level metrics, and provides recommendations for improving efficiency. The application separates the prediction logic from the presentation layer and uses the trained model's existing preprocessing rather than recreating it in the UI.",
    whatCameOfIt:
      "A deployable Streamlit application with a landing page, user input flow, and energy analysis report. The report presents predicted usage, efficiency-related metrics, potential savings, major energy drivers, and recommendations to help users understand and improve their energy consumption.",
    links: {
      repo: "https://github.com/Hanizakkk/EcoSense-AI",
      demo: "https://ecosense-energy.streamlit.app/",
    },
  },
  {
    id: "campus-management-system",
    title: "Campus Management System",
    status: "live",
    tags: ["java", "oop", "crud", "role-based"],
    problem:
      "A university needs a centralized way to manage academic information and campus activities while giving administrators, teachers, and students appropriate access based on their roles.",
    whatIDid:
      "Built a university Campus Management System that manages classes, courses, and related university information. The system provides different functionality and access for administrators, teachers, and students based on their roles. It includes CRUD operations for managing information, provides campus/service status information such as whether facilities like the canteen are active, and uses charts and graphical representations to make important information easier to understand.",
    whatCameOfIt:
      "A functional university management system that brings academic and campus information into one system while separating functionality according to user roles. It also provides visual summaries and management operations for campus information.",
    links: {
      repo: "https://github.com/Hanizakkk/Campus-Management-System",
      demo: null,
    },
  },
  {
    id: "flyrank-work",
    title: "FlyRank Internship Work",
    status: "live",
    tags: ["flyrank", "machine learning", "jupyter", "python"],
    problem:
      "The FlyRank internship required working through AI/ML tasks and turning research questions and project requirements into structured machine-learning work and reproducible outputs.",
    whatIDid:
      "Worked through FlyRank AI/ML internship assignments and capstone workflow, including research-question formulation, defining an ML task, working with the provided internship dataset, running notebooks and pipeline components, producing results, and organizing the work in a GitHub repository. The work involved using AI-assisted development and research workflows while building and documenting the actual internship deliverables.",
    whatCameOfIt:
      "A structured GitHub repository containing FlyRank internship work, research, notebooks, pipeline/results, and documented progress toward the internship deliverables.",
    links: {
      repo: "https://github.com/Hanizakkk/flyrank_working-repo",
      demo: null,
    },
  },
];

export const PROFILE = {
  name: "Hania Zaki",
  title: "Computer Science student — Machine Learning, AI & Software Development",
  bio: "I build practical projects to explore machine learning and AI, experiment with emerging tools and workflows, and turn ideas into working applications.",
  github: "https://github.com/Hanizakkk",
};
