# Cool Web Effects Showcase

A Flask-based web application demonstrating a variety of cool and interactive visual effects for websites. Built with Python (Flask), HTML, CSS, and JavaScript.

Project by: Halil İbrahim Yesirci

## 🌟 Introduction

This project serves as a dynamic catalog of web-based visual effects, designed to inspire developers and designers. Explore different animations, interactive elements, and UI enhancements that can make a website more engaging.

## ✨ Features

*   **Diverse Effect Catalog:** Showcases a range of effects, including:
    *   Liquid Chrome
    *   Glitch Effect
    *   Various Loading Screen Animations
    *   Blur Effects (Background, Image Hover, Spoiler, Glassmorphism)
    *   Parallax Scrolling (JS-controlled and CSS 3D)
    *   Cursor Trail/Spotlight
    *   Text Animations (Typing, Reveal, Slide-up)
    *   Scroll-triggered Animations (Fade, Slide, Zoom, Counters)
    *   *(...ve eklediğimiz diğer 6 efektin adı buraya eklenecek)*
*   **Theme Switching:** Light and Dark mode options for comfortable viewing.
*   **Language Switching:** Basic internationalization support (English and Turkish).
*   **Interactive Previews:** Each effect is presented on its own page for a focused demonstration.
*   **Responsive Design:** The main catalog and effect pages are designed to be usable across different screen sizes.
*   **GitHub Codespaces Ready:** Easily launch and run the project in a pre-configured cloud development environment.

## 🛠️ Technologies Used

*   **Backend:** Python with Flask framework
*   **Frontend:**
    *   HTML5
    *   CSS3 (Flexbox, Grid, Animations, Transitions, Custom Properties)
    *   JavaScript (ES6+, DOM Manipulation, Intersection Observer API)
*   **Templating:** Jinja2
*   **Development Environment:** Configured for GitHub Codespaces

## 🚀 Running the Project

You can run this project locally on your machine or directly in GitHub Codespaces.

### Option 1: Running Locally

1.  **Prerequisites:**
    *   Python 3.8+ installed.
    *   `pip` (Python package installer).
    *   Git (for cloning the repository).

2.  **Clone the Repository:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
    cd YOUR_REPOSITORY_NAME/flask-template
    ```
    *(Replace `YOUR_USERNAME/YOUR_REPOSITORY_NAME` with the actual repository URL)*

3.  **Create and Activate a Virtual Environment:**
    *   **Windows:**
        ```bash
        python -m venv venv
        .\venv\Scripts\activate
        ```
    *   **macOS/Linux:**
        ```bash
        python3 -m venv venv
        source venv/bin/activate
        ```

4.  **Install Dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

5.  **Run the Flask Application:**
    ```bash
    flask run
    ```
    (By default, this will start the application on `http://127.0.0.1:5000`)

6.  Open your web browser and navigate to `http://127.0.0.1:5000`.

### Option 2: Running in GitHub Codespaces

This project is configured to run seamlessly in GitHub Codespaces, providing a fully configured development environment directly in your browser.

1.  **Navigate** to the main page of this GitHub repository.
2.  Click the green **`< > Code`** button.
3.  Go to the **Codespaces** tab.
4.  Click on **"Create codespace on main"** (or your desired branch).

    [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=YOUR_USERNAME/YOUR_REPOSITORY_NAME)

    *(**Note:** Replace `YOUR_USERNAME/YOUR_REPOSITORY_NAME` in the badge URL with your actual GitHub username and repository name for the badge to work correctly.)*

#### What Happens Next in Codespaces:

*   GitHub Codespaces will set up the development environment based on the configurations in the `.devcontainer/devcontainer.json` file.
*   All necessary Python dependencies listed in `requirements.txt` will be automatically installed (`postCreateCommand`).
*   The Flask web application will automatically start running on port 5000 (`postAttachCommand`).

#### Accessing the Application in Codespaces:

*   Once the Codespace is ready and the application has started, port 5000 will be automatically forwarded.
*   You should see a notification pop up in VS Code (within Codespaces) asking if you want to open the forwarded port in your browser. Click **"Open in Browser"**.
*   Alternatively, you can go to the **"Ports"** tab in VS Code (usually in the bottom panel or accessible via the Command Palette), find port 5000, and click the "Open in Browser" (globe) icon next to it.

This will open the "Cool Effects" website in a new browser tab, running directly from your Codespace!

## 📂 Project Structure (Simplified)

```
.
├── flask-template/
│   ├── app.py              # Main Flask application file
│   ├── requirements.txt    # Python dependencies
│   ├── static/             # Static files (CSS, JS, images)
│   │   ├── css/
│   │   ├── js/
│   │   └── images/         # (if you add any project-specific images)
│   ├── templates/          # HTML templates (Jinja2)
│   │   ├── base.html       # Base layout template
│   │   ├── index.html      # Homepage - Effect catalog
│   │   ├── about.html
│   │   └── ... (other effect-specific HTML files)
│   └── venv/               # Virtual environment (if created locally)
├── .devcontainer/
│   └── devcontainer.json   # GitHub Codespaces configuration
└── README.md               # This file
```

## 💡 Future Ideas / Potential Enhancements

*   Add more diverse and complex effects.
*   Implement user accounts to save favorite effects.
*   Allow users to customize parameters for some effects in real-time.
*   Write unit and integration tests.

## 🙏 Acknowledgements

*   Placeholder images from [Picsum Photos](https://picsum.photos/).
*   Inspiration from various web design and development showcases.

---

Happy Coding!
