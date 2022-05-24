const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('user', {
    id_user: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    login: {type: DataTypes.STRING, unique: true, allowNull: false},
    pwd_hash: {type: DataTypes.CHAR(64), allowNull: false},
    role: {type: DataTypes.STRING, allowNull: false}
}, {
    freezeTableName: true
})

const Admin = sequelize.define('admin', {
    id_admin: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    login: {type: DataTypes.STRING, unique: true, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false}
}, {
    freezeTableName: true
})

const Student = sequelize.define('student', {
    id_student: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    login: {type: DataTypes.STRING, unique: true, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    birth_year: {type: DataTypes.INTEGER, allowNull: true},
    group: {type: DataTypes.STRING, allowNull: false},
    phone_number: {type: DataTypes.STRING(12), allowNull: true},
    email: {type: DataTypes.STRING, allowNull: true},
    photo: {type: DataTypes.STRING, allowNull: true},
    hometown: {type: DataTypes.STRING, allowNull: true},
    school: {type: DataTypes.STRING, allowNull: true},
    math_points: {type: DataTypes.TINYINT.UNSIGNED, allowNull: false},
    russian_points: {type: DataTypes.TINYINT.UNSIGNED, allowNull: false},
    physics_points: {type: DataTypes.TINYINT.UNSIGNED, allowNull: true},
    informatics_points: {type: DataTypes.TINYINT.UNSIGNED, allowNull: true},
    iap_points: {type: DataTypes.TINYINT.UNSIGNED, allowNull: false},
    oop_points: {type: DataTypes.TINYINT.UNSIGNED, allowNull: true},
    skills: {type: DataTypes.TEXT, allowNull: true},
    achievements: {type: DataTypes.TEXT, allowNull: true},
    desired_training: {type: DataTypes.TEXT, allowNull: true}
}, {
    freezeTableName: true
})

const Event = sequelize.define('event', {
    id_event: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    title: {type: DataTypes.STRING, allowNull: false},
    type: {type: DataTypes.STRING, allowNull: false},
    course: {type: DataTypes.CHAR(1), allowNull: false},
    beginning_date: {type: DataTypes.DATEONLY, allowNull: false},
    ending_date: {type: DataTypes.DATEONLY, allowNull: false},
    description: {type: DataTypes.TEXT},
    documents_deadline: {type: DataTypes.DATEONLY},
    documents_info: {type: DataTypes.TEXT}
}, {
    freezeTableName: true
})

const Company = sequelize.define('company', {
    id_company: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    login: {type: DataTypes.STRING, unique: true, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT},
    hr_name: {type: DataTypes.STRING, allowNull: true},
    hr_phone_number: {type: DataTypes.STRING(12), allowNull: true},
    hr_email: {type: DataTypes.STRING, allowNull: true}
}, {
    freezeTableName: true
})

const CompanyInEvent = sequelize.define('company_in_event', {
    id_company_in_event: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    id_company: {type: DataTypes.INTEGER, allowNull: false},
    id_event: {type: DataTypes.INTEGER, allowNull: false},
    students_to_recruit_number: {type: DataTypes.INTEGER.UNSIGNED, allowNull: false},
    responsible_name: {type: DataTypes.STRING, allowNull: false},
    responsible_phone_number: {type: DataTypes.STRING(12), allowNull: true},
    responsible_email: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: true}
}, {
    freezeTableName: true
})

const TrainingType = sequelize.define('training_type', {
    id_training_type: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    id_company: {type: DataTypes.INTEGER, allowNull: false},
    id_company_in_event: {type: DataTypes.INTEGER, allowNull: false},
    id_event: {type: DataTypes.INTEGER, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    places_taken: {type: DataTypes.INTEGER.UNSIGNED, allowNull: false},
    places_total: {type: DataTypes.INTEGER.UNSIGNED, allowNull: false},
}, {
    freezeTableName: true
})

const TrainingTypeOffered = sequelize.define('training_type_offered', {
    id_training_type_offered: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    id_training_type: {type: DataTypes.INTEGER, allowNull: false},
    id_company_chose_student: {type: DataTypes.INTEGER, allowNull: false}
}, {
    freezeTableName: true
})

const CompanyChoseStudent = sequelize.define('company_chose_student', {
    id_company_chose_student: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    id_company: {type: DataTypes.INTEGER, allowNull: false},
    id_student: {type: DataTypes.INTEGER, allowNull: false}
}, {
    freezeTableName: true
})

const StudentChoseCompany = sequelize.define('student_chose_company', {
    id_student_chose_company: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    id_student: {type: DataTypes.INTEGER, allowNull: false},
    id_company: {type: DataTypes.INTEGER, allowNull: false}
}, {
    freezeTableName: true
})

const StudentCompanyTraining = sequelize.define('student_company_training', {
    id_student_company_training: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    id_student: {type: DataTypes.INTEGER, allowNull: false},
    id_company: {type: DataTypes.INTEGER, allowNull: false},
    id_training_type: {type: DataTypes.INTEGER, allowNull: false}
}, {
    freezeTableName: true
})

const Document = sequelize.define('document', {
    id_document: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    type: {type: DataTypes.STRING, allowNull: false},
    template_file: {type: DataTypes.STRING, allowNull: false},
    sample_file: {type: DataTypes.STRING, allowNull: true}
}, {
    freezeTableName: true
})

User.hasMany(Admin, {
    foreignKey: 'id_user'
});
Admin.belongsTo(User, {
    foreignKey: 'id_user'
});

User.hasMany(Student, {
    foreignKey: 'id_user'
});
Student.belongsTo(User, {
    foreignKey: 'id_user'
});

User.hasMany(Company, {
    foreignKey: 'id_user'
});
Company.belongsTo(User, {
    foreignKey: 'id_user'
});

Company.hasMany(CompanyInEvent, {
    foreignKey: 'id_company'
});
CompanyInEvent.belongsTo(Company, {
    foreignKey: 'id_company'
});

Event.hasMany(CompanyInEvent, {
    foreignKey: 'id_event'
});
CompanyInEvent.belongsTo(Event, {
    foreignKey: 'id_event'
});

Event.hasMany(Student, {
    foreignKey: 'id_event'
});
Student.belongsTo(Event, {
    foreignKey: 'id_event'
});

Event.hasMany(TrainingType, {
    foreignKey: 'id_event'
});
TrainingType.belongsTo(Event, {
    foreignKey: 'id_event'
});

CompanyInEvent.hasMany(TrainingType, {
    foreignKey: 'id_company_in_event'
});
TrainingType.belongsTo(CompanyInEvent, {
    foreignKey: 'id_company_in_event'
});

StudentCompanyTraining.hasOne(TrainingTypeOffered, {
    foreignKey: 'id_student_company_training'
});
TrainingTypeOffered.belongsTo(StudentCompanyTraining, {
    foreignKey: 'id_student_company_training'
});

TrainingType.hasMany(TrainingTypeOffered, {
    foreignKey: 'id_training_type'
});
TrainingTypeOffered.belongsTo(TrainingType, {
    foreignKey: 'id_training_type'
});

CompanyChoseStudent.hasMany(TrainingTypeOffered, {
    foreignKey: 'id_company_chose_student'
});
TrainingTypeOffered.belongsTo(CompanyChoseStudent, {
    foreignKey: 'id_company_chose_student'
});

Student.hasOne(StudentCompanyTraining, {
    foreignKey: 'id_student'
});
StudentCompanyTraining.belongsTo(Student, {
    foreignKey: 'id_student'
});

Company.hasMany(StudentCompanyTraining, {
    foreignKey: 'id_company'
});
StudentCompanyTraining.belongsTo(Company, {
    foreignKey: 'id_company'
});

Student.hasMany(StudentChoseCompany, {
    foreignKey: 'id_student'
});
StudentChoseCompany.belongsTo(Student, {
    foreignKey: 'id_student'
});

Student.hasMany(CompanyChoseStudent, {
    foreignKey: 'id_student'
});
CompanyChoseStudent.belongsTo(Student, {
    foreignKey: 'id_student'
});

Company.hasMany(CompanyChoseStudent, {
    foreignKey: 'id_company'
});
CompanyChoseStudent.belongsTo(Company, {
    foreignKey: 'id_company'
});

Company.hasMany(StudentChoseCompany, {
    foreignKey: 'id_company'
});
StudentChoseCompany.belongsTo(Company, {
    foreignKey: 'id_company'
});

module.exports = {
    User,
    Student,
    Admin,
    Company,
    Event,
    CompanyInEvent,
    TrainingType,
    TrainingTypeOffered,
    CompanyChoseStudent,
    StudentChoseCompany,
    StudentCompanyTraining,
    Document
}