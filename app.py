from flask import Flask, render_template, request


app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/skills")
def skills():
    return render_template("skills.html")

@app.route("/projects")
def projects():
    return render_template("projects.html")

@app.route("/education")
def education():
    return render_template("education.html")

@app.route("/certifications")
def certifications():
    return render_template("certifications.html")

@app.route("/contact", methods=["GET", "POST"])
def contact():
    if request.method == "POST":
        return render_template("contact.html", success=True)
    return render_template("contact.html", success=False)


if __name__ == "__main__":
    app.run(debug=True)
