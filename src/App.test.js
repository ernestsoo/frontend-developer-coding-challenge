import { render, screen, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';

import App from './App';
import HomeScreen from "./screens/HomeScreen";
import CryptoListScreen from "./screens/CryptoListScreen";
import SettingsScreen from "./screens/SettingsScreen";

afterEach(cleanup);

test('renders App without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('renders HomeScreen component', () => {
  const { getByTestId } = render(<HomeScreen />);
  expect(getByTestId("homeScreen")).toBeInTheDocument();
  expect(screen.getByText('Trending Coins')).toBeInTheDocument();
  expect(screen.getByText('Global Market Information')).toBeInTheDocument();
  expect(screen.getByText('Top 10 Cryptocurrencies')).toBeInTheDocument();
});

test('renders CryptoListScreen component', () => {
  const { getByTestId } = render(<CryptoListScreen />);
  expect(getByTestId("cryptoListScreen")).toBeInTheDocument();
  expect(screen.getByText('Cryptocurrencies List')).toBeInTheDocument();
});

test('renders SettingsScreen component', () => {
  const { getByTestId } = render(<SettingsScreen />);
  expect(getByTestId("settingsScreen")).toBeInTheDocument();
  expect(screen.getByText('This tab is just a placeholder page.')).toBeInTheDocument();
});




