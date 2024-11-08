import React from 'react';

// Step 1: Define an interface for props
interface className {
  className?: string; // Optional prop
}

// Step 2: Type the component with the props
const Shader: React.FC<className> = ({ className }) => {
  return (
    <div  className={`${className} w-96 h-96 bg-opacity-20 rounded-full blur-3xl overflow-hidden z-0`} >
    </div>
  );
};
export default Shader;