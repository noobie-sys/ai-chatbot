/**
 * "use client" directive
 * This is a Next.js specific directive that marks this component to be rendered on the client side.
 * It's necessary for components that use hooks or browser-only APIs.
 */
"use client";

/**
 * Importing React and the useState hook from the React library
 * - React: The core React library needed for creating React components
 * - useState: A React hook that lets you add state to functional components
 */
import React, { useState } from "react";

/**
 * TypeScript interface definition for the initial value props
 * This defines the shape of the data that will be stored in the context:
 * - currentStep: A number representing the current step in an authentication flow
 * - setCurrentStep: A state setter function that accepts either a new value or a function to update the current value
 */
type IntialValueProps = {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

/**
 * Initial default values for the context
 * - currentStep starts at 1 (likely the first step in an auth flow)
 * - setCurrentStep is initialized with an empty function as a placeholder
 *   (this will be replaced with the actual state setter when the provider is used)
 */
const InitialValue: IntialValueProps = {
  currentStep: 1,
  setCurrentStep: () => {},
};

/**
 * Creating the React context with the initial values
 * This creates a Context object that components can subscribe to
 */
const authContext = React.createContext(InitialValue);

/**
 * Destructuring the Provider component from the context
 * The Provider is what makes the context value available to its child components
 */
const { Provider } = authContext;

/**
 * AuthContextProvider component
 * This is a wrapper component that:
 * 1. Manages the state for the authentication steps
 * 2. Provides this state to all child components via the context
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} children - Child components that will have access to this context
 */
export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  /**
   * State declaration using the useState hook
   * - currentStep: The current value of the step
   * - setCurrentStep: Function to update the step
   * - Initialized with the default value from InitialValue
   */
  const [currentStep, setCurrentStep] = useState<number>(
    InitialValue.currentStep
  );

  /**
   * Creating the value object to be provided to the context
   * This contains both the current state and the setter function
   */
  const value = {
    currentStep,
    setCurrentStep,
  };

  /**
   * Rendering the Provider component with the value and children
   * This makes the context value available to all nested components
   */
  return <Provider value={value}>{children}</Provider>;
};

/**
 * Custom hook to consume the auth context
 * This provides a convenient way for components to access the context values
 * without having to use React.useContext directly
 *
 * @returns {IntialValueProps} The current context state (currentStep and setCurrentStep)
 */
export const useAuthContextHook = () => {
  /**
   * Using React's useContext hook to access the context values
   */
  const state = React.useContext(authContext);

  /**
   * Returning the context state to the component that uses this hook
   */
  return state;
};
