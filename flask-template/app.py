from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/liquid-chrome')
def liquid_chrome():
    return render_template('liquid_chrome_effect.html')

@app.route('/glitch')
def glitch():
    return render_template('glitch_effect.html')

@app.route('/loading/<int:effect_id>')
def loading_screen(effect_id):
    return render_template(f'loading_screen_{effect_id}.html')

@app.route('/blur/<int:effect_id>')
def blur_effect(effect_id):
    return render_template(f'blur_effect_{effect_id}.html')

@app.route('/about')
def about():
    return render_template('about.html')

if __name__ == '__main__':
    app.run(debug=True)
