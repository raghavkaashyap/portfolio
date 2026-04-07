import { relevantCoursework } from '../constants/index.js';

const Coursework = () => {
    return (
        <section className="c-space my-20" id="coursework">
            <div className="w-full text-white-600">
                <p className="head-text">Relevant Coursework</p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {relevantCoursework.map((course) => (
                        <div
                            key={course.id}
                            className="rounded-lg border border-black-300 bg-black-200 p-4 hover:shadow-lg hover:shadow-purple-300 transition-all"
                        >
                            <p className="text-sm text-purple-300">{course.courseId}</p>
                            <p className="mt-1 text-white-800 font-medium">{course.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Coursework;

