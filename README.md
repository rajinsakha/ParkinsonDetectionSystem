# Early Parkinson's Disease Detection System

A web application for early detection of Parkinson's disease using the Support Vector Machine (SVM) algorithm. The application analyzes various features extracted from voice recordings to predict the likelihood of Parkinson's disease.

## Demo

Check out the live demo of the application: [parkinson-detection-system.vercel.app](https://parkinson-detection-system.vercel.app)

## Features

- **Voice Analysis**: The system analyzes voice features such as pitch, frequency, and other vocal attributes that are often affected in Parkinson's disease.
- **SVM Algorithm**: Uses a Support Vector Machine (SVM) model trained on a dataset to predict the likelihood of Parkinson's disease.
- **User-Friendly Interface**: A simple and intuitive interface for uploading voice recordings and viewing prediction results.
- **Real-Time Prediction**: Get instant results after uploading your voice recording.

## Technologies Used

- **Frontend**: Developed using React.js for a dynamic and responsive user interface.
- **Backend**: Python with Flask (or Django) for handling the machine learning model and API requests.
- **Machine Learning**: Scikit-learn for training and implementing the Support Vector Machine (SVM) model.
- **Deployment**: Hosted on Vercel for a fast and scalable deployment.

## Getting Started

### Prerequisites

- Node.js
- Python
- Git

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/parkinson-detection-system.git
    cd parkinson-detection-system
    ```

2. **Install frontend dependencies**:

    ```bash
    cd client
    npm install
    ```

3. **Install backend dependencies**:

    ```bash
    cd ../server
    pip install -r requirements.txt
    ```

4. **Start the development server**:

    - Frontend: Run the following in the `client` directory:

      ```bash
      npm start
      ```

    - Backend: Run the following in the `server` directory:

      ```bash
      python app.py
      ```

5. **Open the application**:

    The application should be running at `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend.

## How It Works

1. **Upload Voice Recording**: Users insert nine different voice recording features values using form.
2. **Prediction**: The extracted features are fed into the SVM model to predict the likelihood of Parkinson's disease.
3. **Results**: The prediction result is displayed to the user.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- The dataset used to train the model is sourced from [UCI Machine Learning Repository](https://archive.ics.uci.edu/ml/datasets/Parkinsons).
- Inspired by research on early detection methods for Parkinson's disease.

---

Developed by Rajin Sakha (https://github.com/rajinsakha)

