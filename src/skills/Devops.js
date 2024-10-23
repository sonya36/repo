import React from 'react';

const Devops = () => {
    return (
        <div className="skills_content">
            <h3 className="skills_title">DevOps</h3>
            <div className="skills_box">
                <div className="skills_group">
                    <div className="skills_data">
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills_name">AWS</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills_name">Docker</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Devops;

