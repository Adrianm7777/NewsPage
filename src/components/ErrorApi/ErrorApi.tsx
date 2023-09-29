interface ErrorApiProps {
  errorMessage: string;
}

const ErrorApi = ({ errorMessage }: ErrorApiProps) => (
  <div className="error-container">
    <div className="error-api">
      <p>An error has occurred:</p>
      <p>{errorMessage}</p>
    </div>
  </div>
);

export default ErrorApi;
