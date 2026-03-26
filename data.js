const STUDY_MATERIALS = {
    11: {
        Physics: {
            categories: {
                'Core Topics': [
                    { name: 'Unit and Dimension', file: 'Vibrant Academy Modules/Class 11th/Physics/Unit and dimension_micro_XI.pdf' },
                    { name: 'Kinematics', file: 'Vibrant Academy Modules/Class 11th/Physics/Kinematics_micro_XI.pdf' },
                    { name: 'Particle Dynamics', file: 'Vibrant Academy Modules/Class 11th/Physics/Particle Dynamics_micro_XI.pdf' },
                    { name: 'Rotational Dynamics', file: 'Vibrant Academy Modules/Class 11th/Physics/Rotational Dynamics_micro_XI.pdf' }
                ],
                'Mechanics': [
                    { name: 'Elasticity', file: 'Vibrant Academy Modules/Class 11th/Physics/Elasticity_micro_XI..pdf' },
                    { name: 'Fluid Mechanics', file: 'Vibrant Academy Modules/Class 11th/Physics/Fluid mechanics_micro_XI.pdf' },
                    { name: 'Simple Harmonic Motion', file: 'Vibrant Academy Modules/Class 11th/Physics/Simple harmonic motion_micro_XI.pdf' }
                ],
                'Waves & Thermodynamics': [
                    { name: 'Waves in a String', file: 'Vibrant Academy Modules/Class 11th/Physics/Waves in a string_micro_XI.pdf' },
                    { name: 'Sound Waves', file: 'Vibrant Academy Modules/Class 11th/Physics/Sound waves_micro_XI.pdf' },
                    { name: 'KTG & Thermodynamics', file: 'Vibrant Academy Modules/Class 11th/Physics/KTG & Thermodynamics_micro_XI.pdf' },
                    { name: 'Thermal Expansion, Calorimetry & Heat Transfer', file: 'Vibrant Academy Modules/Class 11th/Physics/Thermal Expansion Calorimetry & Heat transfer_micro_XI.pdf' }
                ]
            }
        },
        Chemistry: {
            categories: {
                'Physical Chemistry': [
                    { name: 'Atomic Structure', file: 'Vibrant Academy Modules/Class 11th/Chemistry/Physical Chemistry /ATOMIC STRUCTURE_MICRO_XI.pdf' },
                    { name: 'Stoichiometry-I (Mole Concept)', file: 'Vibrant Academy Modules/Class 11th/Chemistry/Physical Chemistry /STOICHIOMETRY-I_(MOLE CONCEPT)_MICRO_XI.pdf' },
                    { name: 'Gaseous State', file: 'Vibrant Academy Modules/Class 11th/Chemistry/Physical Chemistry /GASEOUS STATE_MICRO_XI.pdf' },
                    { name: 'Chemical Equilibrium', file: 'Vibrant Academy Modules/Class 11th/Chemistry/Physical Chemistry /CHEMICAL EQUILIBRIUM_MICRO_XI.pdf' },
                    { name: 'Ionic Equilibrium', file: 'Vibrant Academy Modules/Class 11th/Chemistry/Physical Chemistry /IONIC EQUILIBRIUM_MICRO_XI.pdf' }
                ],
                'Inorganic Chemistry': [
                    { name: 'Periodic Properties', file: 'Vibrant Academy Modules/Class 11th/Chemistry/Inorganic Chemistry/PERIODIC PROPERTIES_MICRO_XI.pdf' },
                    { name: 'Chemical Bonding (Q.B.)', file: 'Vibrant Academy Modules/Class 11th/Chemistry/Inorganic Chemistry/CHEMICAL BONDING (Q.B.)_MICRO_XI.pdf' }
                ],
                'Organic Chemistry': [
                    { name: 'Common Names', file: 'Vibrant Academy Modules/Class 11th/Chemistry/Organic Chemistry/COMMON NAME_MICRO_XI.pdf' },
                    { name: 'Electronic Displacement Effects - Theory Notes', file: 'Vibrant Academy Modules/Class 11th/Chemistry/Organic Chemistry/ELECTRONIC DISPLACEMENT EFFECTS_THEORY-NOTES _MICRO_XI.pdf' },
                    { name: 'Electronic Displacement Effects - Hints & Solutions', file: 'Vibrant Academy Modules/Class 11th/Chemistry/Organic Chemistry/ELECTRONIC DISPLACEMENT EFFECTS HINTS & SOLUTIONS_MICRO_XI.pdf' }
                ]
            }
        },
        Mathematics: {
            categories: {
                'Algebra': [
                    { name: 'Logarithm', file: 'Vibrant Academy Modules/Class 11th/Mathematics/LOGARITHM_MICRO_XI.pdf' },
                    { name: 'Quadratic Equation', file: 'Vibrant Academy Modules/Class 11th/Mathematics/QUADRATIC EQUATION_MICRO_XI.pdf' }
                ]
            }
        }
    }
};

STUDY_MATERIALS[11].Mathematics.categories['Trigonometry'] = [
    { name: 'Compound Angles', file: 'Vibrant Academy Modules/Class 11th/Mathematics/COMPOUND ANGLES_MICRO_XI.pdf' },
    { name: 'Trigonometric Equations and Inequations', file: 'Vibrant Academy Modules/Class 11th/Mathematics/TRIGONOMETRIC EQUATIONS AND INEQUATIONS_MICRO_XI.pdf' },
    { name: 'Solutions of Triangle', file: 'Vibrant Academy Modules/Class 11th/Mathematics/SOLUTIONS OF TRIANGLE_MICRO_XI.pdf' }
];

STUDY_MATERIALS[11].Mathematics.categories['Algebra'].push(
    { name: 'Sequence & Progression', file: 'Vibrant Academy Modules/Class 11th/Mathematics/SEQUENCE & PROGRESSION_MICRO_XI.pdf' },
    { name: 'Binomial Theorem', file: 'Vibrant Academy Modules/Class 11th/Mathematics/BINOMIAL_MICRO_XI.pdf' },
    { name: 'Permutation and Combination', file: 'Vibrant Academy Modules/Class 11th/Mathematics/PERMUTATION AND COMBINATION_MICRO_XI.pdf' },
    { name: 'Determinant', file: 'Vibrant Academy Modules/Class 11th/Mathematics/DETERMINANT_MICRO_XI.pdf' }
);

STUDY_MATERIALS[11].Mathematics.categories['Coordinate Geometry'] = [
    { name: 'Straight Line', file: 'Vibrant Academy Modules/Class 11th/Mathematics/STRAIGHT LINE_MICRO_XI.pdf' },
    { name: 'Circle', file: 'Vibrant Academy Modules/Class 11th/Mathematics/CIRCLE_MICRO_XI.pdf' },
    { name: 'Conic Section (Parabola, Ellipse & Hyperbola)', file: 'Vibrant Academy Modules/Class 11th/Mathematics/CONIC SECTION_(PARABOLA, ELLIPSE & HYPERBOLA)_MICRO_XI.pdf' }
];

STUDY_MATERIALS[12] = {
    Physics: {
        categories: {
            'Electromagnetism': [
                { name: 'Electrostatics', file: 'Vibrant Academy Modules/Class 12th/Physics/Electrostatics_mega_XII.pdf' },
                { name: 'Current Electricity', file: 'Vibrant Academy Modules/Class 12th/Physics/Current electricity_mega_XII.pdf' },
                { name: 'Magnetic Effect of Current', file: 'Vibrant Academy Modules/Class 12th/Physics/Magnetic effect of current_mega_XII.pdf' },
                { name: 'Electromagnetic Induction', file: 'Vibrant Academy Modules/Class 12th/Physics/Electromagnetic induction_mega_XII.pdf' },
                { name: 'Alternating Current', file: 'Vibrant Academy Modules/Class 12th/Physics/Alternating current_mega_XII.pdf' }
            ],
            'Optics': [
                { name: 'Ray Optics', file: 'Vibrant Academy Modules/Class 12th/Physics/Ray optics_mega_XII.pdf' },
                { name: 'Wave Optics', file: 'Vibrant Academy Modules/Class 12th/Physics/Wave optics_mega_XII.pdf' }
            ],
            'Modern Physics': [
                { name: 'Photoelectric Effect', file: 'Vibrant Academy Modules/Class 12th/Physics/Photoelectric effect_mega_XII.pdf' },
                { name: 'Atomic Physics', file: 'Vibrant Academy Modules/Class 12th/Physics/Atomic physics_mega_XII.pdf' },
                { name: 'Nuclear Physics', file: 'Vibrant Academy Modules/Class 12th/Physics/Nuclear physics_mega_XII.pdf' },
                { name: 'Semiconductor', file: 'Vibrant Academy Modules/Class 12th/Physics/Semiconductor_mega_XII.pdf' }
            ]
        }
    },
    Chemistry: {
        categories: {
            'Physical Chemistry': [
                { name: 'Solid State', file: 'Vibrant Academy Modules/Class 12th/Chemistry/Physical Chemistry/SOLID STATE_MEGA_XII.pdf' },
                { name: 'Liquid Solution', file: 'Vibrant Academy Modules/Class 12th/Chemistry/Physical Chemistry/LIQUID SOLUTION_MEGA_XII.pdf' }
            ]
        }
    }
};

STUDY_MATERIALS[12].Chemistry.categories['Physical Chemistry'].push(
    { name: 'Electrochemistry', file: 'Vibrant Academy Modules/Class 12th/Chemistry/Physical Chemistry/ELECTROCHEMISTRY_MEGA_XII.pdf' },
    { name: 'Chemical Kinetics', file: 'Vibrant Academy Modules/Class 12th/Chemistry/Physical Chemistry/CHEMICAL KINETICS_MEGA_XII.pdf' },
    { name: 'Surface Chemistry', file: 'Vibrant Academy Modules/Class 12th/Chemistry/Physical Chemistry/SURFACE CHEMISTRY_MEGA_XII.pdf' },
    { name: 'Thermochemistry', file: 'Vibrant Academy Modules/Class 12th/Chemistry/Physical Chemistry/THERMOCHEMISTRY_MEGA_XII.pdf' },
    { name: 'Thermodynamics', file: 'Vibrant Academy Modules/Class 12th/Chemistry/Physical Chemistry/THERMODYNAMICS_MEGA_XII.pdf' },
    { name: 'Stoichiometry-II (Redox & Equivalent Concepts)', file: 'Vibrant Academy Modules/Class 12th/Chemistry/Physical Chemistry/STOICHIOMETRY-II_(REDOX & EQUIVALENT CONCEPTS)_MEGA_XII.pdf' }
);

STUDY_MATERIALS[12].Chemistry.categories['Inorganic Chemistry'] = [
    { name: 'Chemical Bonding', file: 'Vibrant Academy Modules/Class 12th/Chemistry/Inorganic Chemistry/CHEMICAL BONDING_MEGA_XII.pdf' },
    { name: 'Coordination Compounds', file: 'Vibrant Academy Modules/Class 12th/Chemistry/Inorganic Chemistry/COORDINATION COMPOUNDS_MEGA_XII.pdf' },
    { name: 'D & F-Block Elements', file: 'Vibrant Academy Modules/Class 12th/Chemistry/Inorganic Chemistry/D & F-BLOCK ELEMENTS_MEGA_XII.pdf' },
    { name: 'P-Block Elements', file: 'Vibrant Academy Modules/Class 12th/Chemistry/Inorganic Chemistry/P-BLOCK ELEMENTS_MEGA_XII.pdf' },
    { name: 'S-Block Elements', file: 'Vibrant Academy Modules/Class 12th/Chemistry/Inorganic Chemistry/S-BLOCK ELEMENTS_MEGA_XII.pdf' },
    { name: 'Hydrogen & Its Compounds', file: 'Vibrant Academy Modules/Class 12th/Chemistry/Inorganic Chemistry/HYDROGEN & ITS COMPOUNDS_MEGA_XII.pdf' },
    { name: 'Metallurgy', file: 'Vibrant Academy Modules/Class 12th/Chemistry/Inorganic Chemistry/METALLURGY_MEGA_XII.pdf' },
    { name: 'Salt Analysis', file: 'Vibrant Academy Modules/Class 12th/Chemistry/Inorganic Chemistry/SALT ANALYSIS_MEGA_XII.pdf' },
    { name: 'Environmental Chemistry', file: 'Vibrant Academy Modules/Class 12th/Chemistry/Inorganic Chemistry/ENVIRONMENTAL CHEMISTRY_MEGA_XII.pdf' }
];

STUDY_MATERIALS[12].Chemistry.categories['Organic Chemistry'] = [
    { name: 'Electronic Displacement Effects', file: 'Vibrant Academy Modules/Class 12th/Chemistry/Organic Chemistry/ELECTRONIC DISPLACEMENT EFFECTS_MEGA_XII.pdf' },
    { name: 'Isomerism', file: 'Vibrant Academy Modules/Class 12th/Chemistry/Organic Chemistry/ISOMERISM_MEGA_XII.pdf' },
    { name: 'Hydrocarbon', file: 'Vibrant Academy Modules/Class 12th/Chemistry/Organic Chemistry/HYDROCARBON_MEGA_XII.pdf' },
    { name: 'Alkyl Halide', file: 'Vibrant Academy Modules/Class 12th/Chemistry/Organic Chemistry/ALKYL HALIDE_MEGA_XII.pdf' },
    { name: 'Alcohols & Ethers', file: 'Vibrant Academy Modules/Class 12th/Chemistry/Organic Chemistry/ALCOHOLS & ETHERS_MEGA_XII.pdf' },
    { name: 'Carbonyl Compound', file: 'Vibrant Academy Modules/Class 12th/Chemistry/Organic Chemistry/CARBONYL COMPOUND_MEGA_XII.pdf' },
    { name: 'Carbene & Nitrene', file: 'Vibrant Academy Modules/Class 12th/Chemistry/Organic Chemistry/CARBENE & NITRENE_MEGA_XII.pdf' },
    { name: 'Biomolecules & Polymers', file: 'Vibrant Academy Modules/Class 12th/Chemistry/Organic Chemistry/BIOMOLECULES & POLYMERS_MEGA_XII.pdf' },
    { name: 'Chemistry in Everyday Life & Protein, Nucleic Acid, Vitamin', file: 'Vibrant Academy Modules/Class 12th/Chemistry/Organic Chemistry/CHEMISTRY IN EVERY DAY LIFE & PROTEIN, NUCLEIC ACID, VITAMIN_MEGA_XII.pdf' }
];

STUDY_MATERIALS[12].Mathematics = {
    categories: {
        'Calculus': [
            { name: 'Limit, Continuity & Differentiability', file: 'Vibrant Academy Modules/Class 12th/Mathematics/LIMIT, CONTINUITY & DIFFERENTIABILITY_MEGA_XII.pdf' },
            { name: 'Method of Differentiation', file: 'Vibrant Academy Modules/Class 12th/Mathematics/METHOD OF DIFFERENTIATION_MEGA_XII.pdf' },
            { name: 'Application of Derivatives', file: 'Vibrant Academy Modules/Class 12th/Mathematics/APPLICATION OF DERIVATIVES_MEGA_XII.pdf' },
            { name: 'Indefinite Integration', file: 'Vibrant Academy Modules/Class 12th/Mathematics/INDEFINITE INTEGRATION_MEGA_XII.pdf' },
            { name: 'Definite Integration', file: 'Vibrant Academy Modules/Class 12th/Mathematics/DEFINITE INTEGRATION_MEGA_XII.pdf' },
            { name: 'Area Under Curve', file: 'Vibrant Academy Modules/Class 12th/Mathematics/AREA UNDER CURVE_MEGA_XII.pdf' },
            { name: 'Differential Equation', file: 'Vibrant Academy Modules/Class 12th/Mathematics/DIFFERENTIAL EQUATION_MEGA_XII.pdf' }
        ],
        'Algebra & Vectors': [
            { name: 'Matrices', file: 'Vibrant Academy Modules/Class 12th/Mathematics/MATRICES_MEGA_XII.pdf' },
            { name: 'Vector Algebra', file: 'Vibrant Academy Modules/Class 12th/Mathematics/VECTOR ALGEBRA_MEGA_XII.pdf' },
            { name: 'Probability', file: 'Vibrant Academy Modules/Class 12th/Mathematics/PROBABILITY_MEGA_XII.pdf' }
        ],
        '3D Geometry': [
            { name: '3D Geometry', file: 'Vibrant Academy Modules/Class 12th/Mathematics/3D GEOMETRY_MEGA_XII.pdf' }
        ]
    }
};
